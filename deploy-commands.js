//这个文件用来为机器人应用程序注册和更新 slash commands
const {REST,Routes} = require('discord.js');
const clientId = process.env['clientId']
const guildId = process.env['guildId']
const token = process.env['TOKEN']

const fs = require('node:fs');
const path = require('node:path');

const commands = [];

//从文件夹中找到所有的command 文件
const foldersPath = path.join(__dirname,'commands')
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders){
  const commandsPath = path.join(foldersPath,folder)
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
  for(const file of commandFiles){
    const filePath = path.join(commandsPath,file);
    const command = require(filePath);
    if('data' in command && 'execute' in command){
      commands.push(command.data.toJSON());
    }else{
      console.log(`[WARNING] The command at ${filePath} is missing property`);
    }
  }
}

//构造REST 模块实例
const rest = new REST().setToken(token);

(async () =>{
  try{
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    const data = await rest.put(
      Routes.applicationGuildCommands(clientId,guildId),
      {body:commands},
    );
    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  }catch(error){

    console.error(error);
  }
})();