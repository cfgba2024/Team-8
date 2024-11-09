package model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Actividad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String resumen;
    private LocalDate fechaInicio;

    public Actividad(Long id, String nombre, String resumen, LocalDate fechaInicio) {
        this.id = id;
        this.nombre = nombre;
        this.resumen = resumen;
        this.fechaInicio = fechaInicio;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getResumen() { return resumen; }
    public void setResumen(String resumen) { this.resumen = resumen; }

    public LocalDate getFechaInicio() { return fechaInicio; }
    public void setFechaInicio(LocalDate fechaInicio) { this.fechaInicio = fechaInicio; }
}
