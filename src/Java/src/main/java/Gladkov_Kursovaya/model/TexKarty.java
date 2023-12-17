package Gladkov_Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Gladkov_Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ТехКарты
 */
@Entity(name = "IISGladkov_KursovayaТехКарты")
@Table(schema = "public", name = "ТехКарты")
public class TexKarty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКарты")
    private Integer номеркарты;

    @Column(name = "Дата")
    private Date дата;

    @OneToMany(mappedBy = "texkarty", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TchTexKarty> tchtexkartys;


    public TexKarty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКарты() {
      return номеркарты;
    }

    public void setНомерКарты(Integer номеркарты) {
      this.номеркарты = номеркарты;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}