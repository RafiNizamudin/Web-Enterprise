import {readFile, writeFile} from 'fs/promises';

async function extractoFile() {
    try{
        const file = await readFile('data.txt', 'utf8')
        console.info(file)
    } catch (err) {
        console.error(err)
    }
}

async function wirtetoFile() {
    try{
        await writeFile('output.txt', 'Hello World ini wirte')
        console.info('Wirte Ini Berhasil')
    } catch (err) {
        console.error(err)
    }
}

extractoFile();
wirtetoFile();
