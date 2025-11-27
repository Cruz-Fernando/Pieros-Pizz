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
        phone: "+57 3046327574",
        whatsapp: "573046327574",
        whatsappLink: "https://wa.me/573046327574"
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
        const isOpen = this.isOpen();
        return {
            isOpen: isOpen,
            statusText: isOpen ? 'Abierto Ahora' : 'Cerrado',
            statusIcon: isOpen ? '✔' : '✘',
            statusClass: isOpen ? 'open' : 'closed'
        };
    }
};

// Exportar el modelo para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RestaurantModel;
}
