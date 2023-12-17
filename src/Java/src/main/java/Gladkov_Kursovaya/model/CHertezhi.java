package Gladkov_Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Gladkov_Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Чертежи
 */
@Entity(name = "IISGladkov_KursovayaЧертежи")
@Table(schema = "public", name = "Чертежи")
public class CHertezhi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЧертежа")
    private Integer номерчертежа;

    @Column(name = "ДатаСоздания")
    private Date датасоздания;

    @Column(name = "Утверждение")
    private Boolean утверждение;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zayavki")
    @Convert("Zayavki")
    @Column(name = "Заявки", length = 16, unique = true, nullable = false)
    private UUID _zayavkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zayavki", insertable = false, updatable = false)
    private Zayavki zayavki;


    public CHertezhi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЧертежа() {
      return номерчертежа;
    }

    public void setНомерЧертежа(Integer номерчертежа) {
      this.номерчертежа = номерчертежа;
    }

    public Date getДатаСоздания() {
      return датасоздания;
    }

    public void setДатаСоздания(Date датасоздания) {
      this.датасоздания = датасоздания;
    }

    public Boolean getУтверждение() {
      return утверждение;
    }

    public void setУтверждение(Boolean утверждение) {
      this.утверждение = утверждение;
    }


}