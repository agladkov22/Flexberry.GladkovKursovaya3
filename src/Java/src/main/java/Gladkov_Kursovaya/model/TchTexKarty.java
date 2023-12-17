package Gladkov_Kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Gladkov_Kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТчТехКарты
 */
@Entity(name = "IISGladkov_KursovayaТчТехКарты")
@Table(schema = "public", name = "ТчТехКарты")
public class TchTexKarty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Oborudovanie")
    @Convert("Oborudovanie")
    @Column(name = "Оборудование", length = 16, unique = true, nullable = false)
    private UUID _oborudovanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Oborudovanie", insertable = false, updatable = false)
    private Oborudovanie oborudovanie;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zayavki")
    @Convert("Zayavki")
    @Column(name = "Заявки", length = 16, unique = true, nullable = false)
    private UUID _zayavkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zayavki", insertable = false, updatable = false)
    private Zayavki zayavki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "CHertezhi")
    @Convert("CHertezhi")
    @Column(name = "Чертежи", length = 16, unique = true, nullable = false)
    private UUID _chertezhiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "CHertezhi", insertable = false, updatable = false)
    private CHertezhi chertezhi;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TexKarty")
    @Convert("TexKarty")
    @Column(name = "ТехКарты", length = 16, unique = true, nullable = false)
    private UUID _texkartyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TexKarty", insertable = false, updatable = false)
    private TexKarty texkarty;


    public TchTexKarty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}