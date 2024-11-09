package controllers;

import model.Actividad;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/actividades")
public class ActividadController {

    @GetMapping("/")
    public List<Actividad> obtenerActividades() {
        // Tres actividades hardcodeadas
        Actividad actividad1 = new Actividad(1L, "Apicultura", "Una actividad de bienvenida para nuevos empleados.", LocalDate.of(2024, 1, 10));
        Actividad actividad2 = new Actividad(2L, "Huerta", "Capacitación obligatoria en protocolos de seguridad.", LocalDate.of(2024, 2, 15));
        Actividad actividad3 = new Actividad(3L, "Vitivinicultura", "Revisión de desempeño anual para todos los empleados.", LocalDate.of(2024, 3, 20));

        return Arrays.asList(actividad1, actividad2, actividad3);
    }
}
