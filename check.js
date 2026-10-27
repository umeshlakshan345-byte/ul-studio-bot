require('dotenv').config();
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

(async () => {
    try {
        const models = await groq.models.list();
        console.log('OK - ඔබේ key එක වැඩ කරනවා! Active models:');
        models.data.forEach(m => console.log('  -', m.id));
    } catch (err) {
        console.error('ERROR:', err.status, err.message);
    }
})();