package Gladkov_Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Gladkov_Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISGladkov_KursovayaКлиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Ответственный")
    private String ответственный;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "Почта")
    private String почта;

    @Column(name = "Банк")
    private String банк;

    @Column(name = "РасСчет")
    private Integer рассчет;

    @Column(name = "ИНН")
    private Integer инн;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getОтветственный() {
      return ответственный;
    }

    public void setОтветственный(String ответственный) {
      this.ответственный = ответственный;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getПочта() {
      return почта;
    }

    public void setПочта(String почта) {
      this.почта = почта;
    }

    public String getБанк() {
      return банк;
    }

    public void setБанк(String банк) {
      this.банк = банк;
    }

    public Integer getРасСчет() {
      return рассчет;
    }

    public void setРасСчет(Integer рассчет) {
      this.рассчет = рассчет;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }


}