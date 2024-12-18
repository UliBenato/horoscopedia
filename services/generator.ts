const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: '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' });

export async function geradorPrevisoes(data: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "Estou fazendo um app onde o usuario entrará com a data de nascimento (DD/MM/AAAA) e quero responder com a previsão do horóscopo do dia, quero que seja muito engraçada, um pouco irônico e que não ofenda ninguém, mas seja criativo."
                },
                {
                    "role": "assistant",
                    "content": "Que divertido!\n\nVou te dar algumas ideias criativas para que você consiga criar uma resposta engraçada e atraente para o usuário, sem ofender ninguém. Lembre-se de que o horóscopo é apenas um entretenimento, e não é científico.\n\n**Ideias para a resposta:**\n\n1. **Crítica da Sorte**: \"Bom, você nasceu no dia [nome do horóscopo], então provavelmente você já sabe que a sorte não é sua melhor amiga... mas Deus é misericordioso!\"\n2. **Personificação do Horóscopo**: \"Olá, [nome do horóscopo]! É sua vez de brilhar! Hoje, você vai dominar o dia com a sabedoria de um sagitário e a paciência de um canceriano.\"\n3. **Chute de Sabedoria**: \"Feliz dia, [nome do horóscopo]! Com base nas estrelas, eu adivinhei que você precisará beber mais café hoje. Ou um pouco de água, dependendo da sua necessidade.\"\n4. **Perguntas Engraçadas**: \"E aí, [nome do horóscopo]? Você vai fazer hoje algo incrível? Ou apenas você e o descanso? Escreva no formulário abaixo para que eu possa adivinhar...\"\n5. **Histórias Engraçadas**: \"Você sabia que [nome do horóscopo] é conhecido por ser o mais... [algo humorístico]? Por isso, espero que você esteja preparado para uma jornada cheia de surpresas!\"\n6. **Adivinhações**: \"E aí, [nome do horóscopo]? Vou adivinhar que você... [algo relacionado ao horóscopo]. Se estiver certo, eu serei o próximo astrólogo!\"\n7. **Maldições Eternas**: \"Cuidado, [nome do horóscopo]! Acredite ou não, mas os astros predisseram que você... [algo engraçado e inocente]. Felizmente, a previsão é de que isso aconteça apenas quando você estiver em um estado de nervosismo extremo.\"\n\nLembre-se de manter a linguagem leve e divertida, para que o usuário se sinta atraído e não ofendido. Além disso, é importante lembrar que o horóscopo não é ciência e é uma forma de entretenimento.\n\n**Dicas adicionais:**\n\n* Certifique-se de que as respostas sejam relacionadas ao horóscopo específico.\n* Use humor e ironia para não ofender ninguém.\n* Seja criativo e original em suas respostas.\n* Mantenha a linguagem leve e divertida.\n* Evite respostas que possam ser consideradas ofensivas ou sensíveis.\n\nBoa sorte com o seu aplicativo!"
                },
                {
                    "role": "user",
                    "content": "quero te enviar a data de aniversário e você irá responder somente com a previsão do horóscopo."
                },
                {
                    "role": "assistant",
                    "content": "Ótimo!\n\nPor favor, envie a data de aniversário no formato \"DD/MM/AAAA\" (por exemplo, 12/02/1990). Eu farei a previsão do horóscopo para você.\n\n Não esqueça de especificar o nome do usuário (por exemplo, \"João\") para que a resposta seja mais atraente.\n\nEstou ansioso para saber qual é a sua data de aniversário!"
                },
                {
                    "role": "user",
                    "content": "quero te enviar a data de aniversário e você irá responder somente com o horóscopo engraçado, sem saudações. Lembre-se, na lingua portuguesa uma pessoa é de um signo, mas não é o signo. Por exemplo, ela é de aquário."
                },
                {
                    "role": "assistant",
                    "content": "Vou enviar apenas a previsão do horóscopo!\n\nEnvie a data de aniversário no formato \"DD/MM/AAAA\"."
                },
                {
                    "role": "user",
                    "content": "22/01/1983"
                },
                {
                    "role": "assistant",
                    "content": "Viverá um dia cheio de surpresas, mas com sorte o suficiente para escapar de ser atingido por elas."
                },
                {
                    "role": "user",
                    "content": data
                },
            ],
            "model": "llama-3.1-70b-versatile",
            "temperature": 1,
            "max_tokens": 100,
        });

        return chatCompletion.choices[0]?.message.content;
    } catch (error) {

        const previsoes = [
            "Poxa, você já sabe que a sorte não é sua melhor amiga... mas Deus é misericordioso!",
            "Com base nas estrelas, eu adivinhei que você precisará beber mais café hoje. Ou um pouco de água, dependendo da sua necessidade",
            "Seu dia será tão produtivo que você até consegue fazer uma lista de tarefas e rabiscá-la inteira.",
            "Prepare-se para um dia de grandes conquistas, como finalmente organizar a gaveta da cozinha.",
            "Hoje é o dia perfeito para realizar seu sonho de ficar na cama o dia todo e assistir Netflix.",
            " Seu destino é brilhar, mas primeiro você precisa lavar as roupas.",
            "A sorte estará ao seu lado, a menos que você esqueça a carteira em casa.",
            "Você será abençoado com a capacidade de dormir em qualquer lugar, a qualquer hora." ]

        return previsoes[Math.floor(Math.random() * previsoes.length)]
    }
}




