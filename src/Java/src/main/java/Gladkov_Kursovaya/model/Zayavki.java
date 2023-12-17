package Gladkov_Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Gladkov_Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Заявки
 */
@Entity(name = "IISGladkov_KursovayaЗаявки")
@Table(schema = "public", name = "Заявки")
public class Zayavki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЗаявки")
    private Integer номерзаявки;

    @Column(name = "ДатаЗаявки")
    private Date датазаявки;

    @Column(name = "НаименДетали")
    private String наимендетали;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Цена")
    private Float цена;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Materialy")
    @Convert("Materialy")
    @Column(name = "Материалы", length = 16, unique = true, nullable = false)
    private UUID _materialyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Materialy", insertable = false, updatable = false)
    private Materialy materialy;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;


    public Zayavki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЗаявки() {
      return номерзаявки;
    }

    public void setНомерЗаявки(Integer номерзаявки) {
      this.номерзаявки = номерзаявки;
    }

    public Date getДатаЗаявки() {
      return датазаявки;
    }

    public void setДатаЗаявки(Date датазаявки) {
      this.датазаявки = датазаявки;
    }

    public String getНаименДетали() {
      return наимендетали;
    }

    public void setНаименДетали(String наимендетали) {
      this.наимендетали = наимендетали;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Float getЦена() {
      return цена;
    }

    public void setЦена(Float цена) {
      this.цена = цена;
    }


}