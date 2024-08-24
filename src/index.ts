
import { mistral } from '@ai-sdk/mistral';
import { CoreMessage, streamText } from 'ai';
import dotenv from 'dotenv';
import * as readline from 'node:readline/promises';

dotenv.config();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages: CoreMessage[] = [];

async function main() {
  while (true) {
    const userInput = await terminal.question('Tú: ');

    messages.push({ role: 'user', content: userInput });

    const result = await streamText({
      model: mistral('mistral-large-latest'),
      system: `You are responsible for hiring junior programmers in a software company.
When the user introduces himself you will ask him about the position he wants to apply for by giving him the following options:
a-. JavaScript development
b.- Python development
c.- Java Development
The language you will use will be the same language in which the candidate expresses their initial greeting.

Once the candidate has indicated their language, you will only ask them five development questions. You will have to ask the question, wait about five minutes and then ask another question, and so on until the five questions are completed.

At the end you will make an evaluation of each of the answers indicating where the candidate has failed and what should be improved. If everything is perfect you will also indicate




When you finish and receive a DO REPORT, you will generate a report in JSON format with the following structure:
{
{ question:here you will indicate the statement
answer1: the candidate's answer
evaluation: your evaluation
},...} When this evaluation is finished, you will ask again for the position repeating the process.
`,
      messages,
    });

    let fullResponse = '';
    process.stdout.write('\nAssistant: ');
    for await (const delta of result.textStream) {
      fullResponse += delta;
      process.stdout.write(delta);
    }
    process.stdout.write('\n\n');

    messages.push({ role: 'assistant', content: fullResponse });
  }
}

main().catch(console.error);