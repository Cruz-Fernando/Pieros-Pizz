// Model: Información del Restaurante
const RestaurantModel = {
    // Información básica
    name: "Piero's Pizza",
    slogan: "La mejor pizza de Colombia",
    logo: "img/logo.png",

    // Horario de atención
    schedule: {
        openingHour: 17,  // 5:00 PM
        closingHour: 22,  // 10:00 PM
        timezone: "America/Bogota",
        daysOpen: [0, 1, 2, 3, 4, 5, 6], // Todos los días (0=Domingo, 6=Sábado)
        displayText: "Lunes a Domingo: 5:00 PM - 10:00 PM"
    },

    // Información de contacto
    contact: {
        // Números de WhatsApp disponibles
        phones: [
            {
                number: "+57 318 533 2199",
                whatsapp: "573185332199",
                whatsappLink: "https://wa.me/573185332199",
                label: "WhatsApp 1"
            },
            {
                number: "+57 314 789 7080",
                whatsapp: "573147897080",
                whatsappLink: "https://wa.me/573147897080",
                label: "WhatsApp 2"
            }
        ],
        // Mantener compatibilidad con código existente (primer número por defecto)
        phone: "+57 318 533 2199",
        whatsapp: "573185332199",
        whatsappLink: "https://wa.me/573185332199"
    },

    // Métodos
    isOpen() {
        const now = new Date();
        const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: this.schedule.timezone }));

        const currentHour = colombiaTime.getHours();
        const currentMinute = colombiaTime.getMinutes();
        const currentDay = colombiaTime.getDay();

        // Verificar si el día actual está en los días de apertura
        if (!this.schedule.daysOpen.includes(currentDay)) {
            return false;
        }

        const currentTimeInMinutes = currentHour * 60 + currentMinute;
        const openingTimeInMinutes = this.schedule.openingHour * 60;
        const closingTimeInMinutes = this.schedule.closingHour * 60;

        return currentTimeInMinutes >= openingTimeInMinutes && currentTimeInMinutes < closingTimeInMinutes;
    },

    getStatus() {
        const now = new Date();
        const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: this.schedule.timezone }));

        const currentHour = colombiaTime.getHours();
        const currentMinute = colombiaTime.getMinutes();
        const currentDay = colombiaTime.getDay();
        const currentTimeInMinutes = currentHour * 60 + currentMinute;

        // Verificar si está abierto ahora
        if (this.isOpen()) {
            return {
                isOpen: true,
                statusText: 'Abierto Ahora',
                statusIcon: '✔',
                statusClass: 'open'
            };
        }

        // Si está cerrado, calcular cuándo abre
        let nextOpenDay = currentDay;
        let daysToAdd = 0;

        // Si hoy es día de apertura pero aún no abre (es temprano)
        if (this.schedule.daysOpen.includes(currentDay) && currentTimeInMinutes < (this.schedule.openingHour * 60)) {
            // Abre hoy más tarde
            const hoursUntil = this.schedule.openingHour - currentHour;
            const minutesUntil = (this.schedule.openingHour * 60) - currentTimeInMinutes;

            let timeText = "";
            if (hoursUntil > 1) {
                timeText = `Abre en ${hoursUntil} horas`;
            } else {
                timeText = `Abre en ${minutesUntil} minutos`;
            }

            return {
                isOpen: false,
                statusText: timeText,
                statusIcon: '⏳',
                statusClass: 'closed'
            };
        }

        // Si ya cerró hoy o hoy no abre, buscar el siguiente día
        // (Simplificado asumiendo que abre todos los días según la config actual, 
        // pero preparado para lógica más compleja si cambia)

        // Como abre todos los días (0-6), el próximo día es mañana
        return {
            isOpen: false,
            statusText: `Abre mañana a las ${this.formatHour(this.schedule.openingHour)}`,
            statusIcon: '🌙',
            statusClass: 'closed'
        };
    },

    formatHour(hour24) {
        const period = hour24 >= 12 ? 'PM' : 'AM';
        const hour12 = hour24 % 12 || 12;
        return `${hour12}:00 ${period}`;
    }
};

// Exportar el modelo para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RestaurantModel;
}
