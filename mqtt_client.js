const mqtt = require('mqtt');

// Defina suas credenciais e informações do broker MQTT
const brokerAddress = "mqtt://localhost"; // Endereço do broker MQTT local
const options = {
    port: 1883, // Porta padrão MQTT
    clientId: 'backend_client_' + Math.random().toString(16).substr(2, 8) // ID do cliente para conexão
    // outras opções conforme necessário
};

const topic = "smartBag/status/all";

// Conecte-se ao broker MQTT
const client = mqtt.connect(brokerAddress, options);

// Callback para quando a conexão é estabelecida
client.on('connect', function () {
    console.log('Conectado ao broker MQTT');
    // Inscreva-se no tópico após a conexão
    client.subscribe(topic);
});

// Callback para quando uma mensagem é recebida
client.on('message', function (topic, message) {
    console.log(`Mensagem recebida no tópico ${topic}: ${message.toString()}`);
});

