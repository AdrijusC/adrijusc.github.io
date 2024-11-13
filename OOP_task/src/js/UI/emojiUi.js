export default class Emoji {
    static getEmoji(temp) {
        if (temp > 30) return "☀️";
        if (temp > 20) return "🌤️";
        if (temp > 10) return "⛅";
        if (temp > 0) return "🌥️"; 
        return "❄️";                
    }
}