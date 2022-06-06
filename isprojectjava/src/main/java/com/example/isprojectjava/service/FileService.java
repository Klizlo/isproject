package com.example.isprojectjava.service;

import com.example.isprojectjava.model.Game;
import com.example.isprojectjava.model.xml.Games;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import java.io.IOException;
import java.io.Reader;
import java.io.StringReader;
import java.io.StringWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class FileService {

    public List<Game> readJSONFile(MultipartFile multipartFile) {

        ObjectMapper mapper = JsonMapper.builder()
                .addModule(new JavaTimeModule())
                .build();

        List<Game> games;
        try {
            String s = new String(multipartFile.getBytes(), StandardCharsets.UTF_8).replace("\uFEFF", "");
            games = mapper.readValue(s, new TypeReference<List<Game>>(){});
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return games;
    }

    public List<Game> readXMLFile(MultipartFile multipartFile) {

        Games games1 = null;
        try {
            JAXBContext jaxbContext = JAXBContext.newInstance(Games.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            Reader reader = new StringReader(new String(multipartFile.getBytes(), StandardCharsets.UTF_8));
            games1 = (Games) unmarshaller.unmarshal(reader);
        } catch (JAXBException e) {
            System.err.println(e.getStackTrace());
        } catch (IOException e) {
            System.err.println(e.getStackTrace());
        }

        return games1.getGame();
    }

    public byte[] getJSONFile(List<Game> allGames) {
        ObjectMapper objectWriter = new ObjectMapper().findAndRegisterModules();

        String json = String.valueOf(allGames);

        return json.getBytes();
    }

    public byte[] getXMLFile(List<Game> allGames) {
        Games games = new Games();
        games.setGame(allGames);
        StringWriter writer = new StringWriter();

        try {
            JAXBContext context = JAXBContext.newInstance(Games.class);
            Marshaller marshaller = context.createMarshaller();
            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
            marshaller.marshal(games, writer);
        } catch (JAXBException e) {
            System.out.println(e.getStackTrace());
        }

        String xml = writer.toString();

        return xml.getBytes();
    }
}
