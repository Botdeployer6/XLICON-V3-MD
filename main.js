//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑-𝐌𝐃    𝐁𝐎𝐓                                                //
//                                                                                                      //  
//                                         Ｖ：3.0                                                      // 
//                                                                                                      // 
//              ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██████╗                    //
//              ╚██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║╚════██╗                   //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║ █████╔╝                  //
//               ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝ ╚═══██╗                   //
//              ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝ ██████╔╝                   //
//              ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝  ╚═════╝                    //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : XLICON-V3-MD
 //  * @author : salmanytofficial
 //  * @youtube : https://www.youtube.com/@s4salmanyt
//   * @description : XLICON-V3 ,A Multi-functional whatsapp user bot.
//*
//* 
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: unicorn_xeon13
//Telegram: t.me/ahmmitech
//GitHub: @salmanytofficial
//WhatsApp: +923184070915
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//   * Created By Github: DGXeon.
//   * Credit To Xeon
//   * © 2024 XLICON-V3-MD.
// ⛥┌┤
// */



function _0x5f55(_0x1e132e,_0x45e419){const _0x1363ab=_0x1363();return _0x5f55=function(_0x5f556f,_0x163a90){_0x5f556f=_0x5f556f-0x19f;let _0x209f9b=_0x1363ab[_0x5f556f];return _0x209f9b;},_0x5f55(_0x1e132e,_0x45e419);}const _0x406e78=_0x5f55;(function(_0x552b71,_0x603d32){const _0x48d77e=_0x5f55,_0x586ebc=_0x552b71();while(!![]){try{const _0x13f8d0=-parseInt(_0x48d77e(0x23f))/0x1*(parseInt(_0x48d77e(0x22b))/0x2)+parseInt(_0x48d77e(0x1a8))/0x3+parseInt(_0x48d77e(0x1f8))/0x4*(-parseInt(_0x48d77e(0x215))/0x5)+parseInt(_0x48d77e(0x23e))/0x6*(-parseInt(_0x48d77e(0x1cb))/0x7)+parseInt(_0x48d77e(0x266))/0x8+parseInt(_0x48d77e(0x1df))/0x9+parseInt(_0x48d77e(0x25a))/0xa*(parseInt(_0x48d77e(0x1a6))/0xb);if(_0x13f8d0===_0x603d32)break;else _0x586ebc['push'](_0x586ebc['shift']());}catch(_0x8ec69){_0x586ebc['push'](_0x586ebc['shift']());}}}(_0x1363,0xf2d2f),require(_0x406e78(0x1a3)));const makeWASocket=require(_0x406e78(0x1d2))[_0x406e78(0x1c2)],{uncache,nocache}=require(_0x406e78(0x1d8)),{color}=require(_0x406e78(0x1c3)),NodeCache=require('node-cache'),readline=require('readline'),pino=require(_0x406e78(0x1e9)),{Boom}=require(_0x406e78(0x1c5)),{Low,JSONFile}=require('./lib/lowdb'),yargs=require(_0x406e78(0x26f)),fs=require('fs'),chalk=require(_0x406e78(0x277)),FileType=require('file-type'),path=require(_0x406e78(0x1af)),axios=require(_0x406e78(0x21c)),_=require(_0x406e78(0x243)),moment=require(_0x406e78(0x1c4)),PhoneNumber=require(_0x406e78(0x1dd)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x406e78(0x280)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetch,await,sleep,reSize}=require(_0x406e78(0x24a)),{default:XliconBotIncConnect,getAggregateVotesInPollMessage,delay,PHONENUMBER_MCC,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto,Browsers}=require(_0x406e78(0x1d2)),store=makeInMemoryStore({'logger':pino()[_0x406e78(0x1c8)]({'level':'silent','stream':_0x406e78(0x1d6)})});global['opts']=new Object(yargs(process[_0x406e78(0x27e)][_0x406e78(0x1f4)](0x2))[_0x406e78(0x1a9)](![])[_0x406e78(0x268)]()),global['db']=new Low(new JSONFile(_0x406e78(0x264))),global[_0x406e78(0x23a)]=global['db'],global['loadDatabase']=async function loadDatabase(){const _0x495d5c=_0x406e78;if(global['db'][_0x495d5c(0x25b)])return new Promise(_0x2057a9=>setInterval(function(){const _0x15c2ed=_0x495d5c;!global['db'][_0x15c2ed(0x25b)]?(clearInterval(this),_0x2057a9(global['db'][_0x15c2ed(0x1dc)]==null?global[_0x15c2ed(0x21e)]():global['db'][_0x15c2ed(0x1dc)])):null;},0x1*0x3e8));if(global['db'][_0x495d5c(0x1dc)]!==null)return;global['db']['READ']=!![],await global['db']['read'](),global['db'][_0x495d5c(0x25b)]=![],global['db'][_0x495d5c(0x1dc)]={'users':{},'database':{},'chats':{},'game':{},'settings':{},'message':{},...global['db'][_0x495d5c(0x1dc)]||{}},global['db'][_0x495d5c(0x1c0)]=_[_0x495d5c(0x1c0)](global['db'][_0x495d5c(0x1dc)]);},loadDatabase();if(global['db'])setInterval(async()=>{const _0xf8db2d=_0x406e78;if(global['db'][_0xf8db2d(0x1dc)])await global['db']['write']();},0x1e*0x3e8);require(_0x406e78(0x252)),nocache('../XLICON-V3.js',_0x2adae4=>console[_0x406e78(0x262)](color(_0x406e78(0x1ea),_0x406e78(0x245)),color('\x27'+_0x2adae4+'\x27','green'),_0x406e78(0x282))),require(_0x406e78(0x1f5)),nocache(_0x406e78(0x21b),_0xe4fb90=>console[_0x406e78(0x262)](color(_0x406e78(0x1ea),_0x406e78(0x245)),color('\x27'+_0xe4fb90+'\x27',_0x406e78(0x245)),_0x406e78(0x282)));function _0x1363(){const _0x585320=['endsWith','./session','connectionReplaced','Kjm8rnDFcpb04gQNSTbW2d','profilePictureUrl','Unknown\x20DisconnectReason:\x20','yellow','0@s.whatsapp.net','length','white','image','alloc','remove','\x20𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉\x20@','chain','participants','default','./lib/color','moment-timezone','@hapi/boom','remoteJid','silent','child','isBuffer','┌─❖\x0a│『\x20\x20*Gᴏᴏᴅʙʏᴇ..!!\x20🍁*\x20\x20』\x0a└┬\x0a\x20\x20\x20\x20◎\x20「\x20@','5879524PZGOVV','welcome','contextInfo','\x20GITHUB:\x20salmanytofficial\x20','🎀\x20Connected\x20to\x20=>\x20','createInterface','fromBuffer','@whiskeysockets/baileys','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','uncaughtException','getName','store','downloadAndSaveMediaMessage','./lib/loader','sendVideoAsSticker','messages.upsert','connecting','data','awesome-phonenumber','block','144459nyOkHx','fatal','false','\x0a\x20\x20\x20\x20└─────────────|','Restart\x20Required,\x20Restarting...','\x20\x20」\x0a\x20\x20\x20\x20│\x20➪\x20\x20*Wᴇʟᴄᴏᴍᴇ\x20Tᴏ*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20','subject','group-participants.update','HH:mm:ss','stdin','pino','[\x20CHANGE\x20]','getNumber','mimetype','test','matchAll','map','@s.whatsapp.net','creds','registered','connection','slice','./main.js','connectionClosed','adminevent','335212eIOZcy','format','--mobile','from','announce','Please\x20type\x20your\x20WhatsApp\x20number\x20😍\x0aFor\x20example:\x20+923184070915\x20:\x20','th\x0a\x20\x20\x20\x20│\x20➪\x20\x20\x20*Tɪᴍᴇ\x20:*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20','message','close','ext','keys','\x20WA\x20NUMBER:\x20','author','authState','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','type','push','Connection\x20TimedOut,\x20Reconnecting...','DD/MM/YYYY','msg','contacts.update','video','already-exists','copyNForward','restrict','timedOut','Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20+923184070915','receivedPendingNotifications','messages','25CdgLRK','public','relayMessage','PHOTO','antiswview','\x20INSTAGRAM:\x20@ahmmikun\x20','../main.js','axios','greenBright','loadDatabase','base64','international','decodeJid','name','ephemeralMessage','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20restricted,\x20Now\x20only\x20admin\x20can\x20edit\x20group\x20info\x20!','viewOnceMessage','stringify','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','\x20\x0a\x20\x20\x20\x20│\x20➪\x20\x20*Mᴇᴍʙᴇʀ\x20:*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20','conversation','fromMe','2oEizno','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.','loggedOut','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','user','split','desc','sendPoll','Timed\x20Out','server','packname','\x0aitem1.TEL;waid=',',\x20you\x20have\x20been\x20*promoted*\x20to\x20*admin*\x20🥳','ignore','isGroup','DATABASE','--pairing-code','some','mtype','12Vjcciq','1809838zhmRIT','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','groups.update','cyan','lodash','serializeM','green','sendImageAsSticker','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60','match','unlinkSync','./lib/myfunc','badSession','Caught\x20exception:\x20','bold','black','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','botname','contacts','./XLICON-V3.js','redBright','bind','Value\x20not\x20found','groupMetadata','key','anticall','concat','10MBZCSO','READ','923184070915','startsWith','connection.update','\x20you\x20will\x20be\x20blocked.\x20If\x20called\x20accidentally\x20please\x20contact\x20the\x20owner\x20to\x20be\x20unblocked\x20!','Your\x20Pairing\x20Code\x20:\x20','groupevent','log','join','src/database.json','viewOnce','6487056hQZVeD','true','parse','\x20\x20」\x0a\x20\x20\x20\x20│\x20➪\x20\x20*Lᴇғᴛ\x20ғʀᴏᴍ*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20','isVideo','conflict','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20opened,\x20Now\x20participants\x20can\x20edit\x20group\x20info\x20!','existsSync','demote','yargs/yargs','sendContact','parseMention','loadMessage','status@broadcast','Xeon','readFileSync','bgBlack','chalk','sendTextWithMentions','𝗢𝗼𝗽𝘀‼️\x20@','Asia/Kolkata','verifiedName','call','\x20call.\x20Sorry\x20@','argv','action','./lib/exif','replace','Updated','WhatsApp','./src/data/role/owner.json','Error\x20in\x20Connection.update\x20','@g.us','./settings','\x0a\x20\x20\x20\x20└─────────────||','magenta','33975755BtXwcx','┌─❖\x0a│『\x20\x20*Hi..!!\x20🐦*\x20\x20』\x0a└┬\x0a\x20\x20\x20\x20◎\x20「\x20\x20@','2963058PbwGyu','exitProcess','\x0a🏮Connecting...','sendMessage','bgGreen','not-authorized','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','path','includes','error'];_0x1363=function(){return _0x585320;};return _0x1363();}let phoneNumber=_0x406e78(0x25c),owner=JSON[_0x406e78(0x268)](fs[_0x406e78(0x275)](_0x406e78(0x1a0)));const pairingCode=!!phoneNumber||process['argv'][_0x406e78(0x1b0)](_0x406e78(0x23b)),useMobile=process[_0x406e78(0x27e)]['includes'](_0x406e78(0x1fa)),rl=readline[_0x406e78(0x1d0)]({'input':process[_0x406e78(0x1e8)],'output':process['stdout']}),question=_0x2ff768=>new Promise(_0x441af9=>rl['question'](_0x2ff768,_0x441af9));async function startXliconBotInc(){const _0x7111fd=_0x406e78;let {version:_0x474d53,isLatest:_0x3ca46f}=await fetchLatestBaileysVersion();const {state:_0x3e603e,saveCreds:_0x3ca377}=await useMultiFileAuthState(_0x7111fd(0x1b3)),_0x140270=new NodeCache(),_0x59d947=makeWASocket({'logger':pino({'level':_0x7111fd(0x1c7)}),'printQRInTerminal':!pairingCode,'browser':Browsers['windows']('Firefox'),'auth':{'creds':_0x3e603e[_0x7111fd(0x1f1)],'keys':makeCacheableSignalKeyStore(_0x3e603e['keys'],pino({'level':_0x7111fd(0x1e0)})['child']({'level':_0x7111fd(0x1e0)}))},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x140161=>{const _0xa3b286=_0x7111fd;let _0x240dc9=jidNormalizedUser(_0x140161[_0xa3b286(0x1c6)]),_0x52a4b0=await store[_0xa3b286(0x272)](_0x240dc9,_0x140161['id']);return _0x52a4b0?.['message']||'';},'msgRetryCounterCache':_0x140270,'defaultQueryTimeoutMs':undefined});store[_0x7111fd(0x254)](_0x59d947['ev']);if(pairingCode&&!_0x59d947[_0x7111fd(0x205)][_0x7111fd(0x1f1)][_0x7111fd(0x1f2)]){if(useMobile)throw new Error(_0x7111fd(0x24f));let _0x259c62;!!_0x259c62?(_0x259c62=_0x259c62[_0x7111fd(0x281)](/[^0-9]/g,''),!Object[_0x7111fd(0x202)](PHONENUMBER_MCC)[_0x7111fd(0x23c)](_0x5a2d=>_0x259c62[_0x7111fd(0x25d)](_0x5a2d))&&(console[_0x7111fd(0x262)](chalk['bgBlack'](chalk[_0x7111fd(0x253)](_0x7111fd(0x212)))),process['exit'](0x0))):(_0x259c62=await question(chalk['bgBlack'](chalk[_0x7111fd(0x21d)](_0x7111fd(0x1fd)))),_0x259c62=_0x259c62[_0x7111fd(0x281)](/[^0-9]/g,''),!Object['keys'](PHONENUMBER_MCC)[_0x7111fd(0x23c)](_0x28c53e=>_0x259c62['startsWith'](_0x28c53e))&&(console[_0x7111fd(0x262)](chalk['bgBlack'](chalk['redBright'](_0x7111fd(0x212)))),_0x259c62=await question(chalk[_0x7111fd(0x276)](chalk[_0x7111fd(0x21d)](_0x7111fd(0x1fd)))),_0x259c62=_0x259c62[_0x7111fd(0x281)](/[^0-9]/g,''),rl[_0x7111fd(0x200)]())),setTimeout(async()=>{const _0x3638b2=_0x7111fd;let _0x32d2b3=await _0x59d947['requestPairingCode'](_0x259c62);_0x32d2b3=_0x32d2b3?.[_0x3638b2(0x248)](/.{1,4}/g)?.[_0x3638b2(0x263)]('-')||_0x32d2b3,console[_0x3638b2(0x262)](chalk[_0x3638b2(0x24e)](chalk[_0x3638b2(0x1ac)](_0x3638b2(0x260))),chalk[_0x3638b2(0x24e)](chalk[_0x3638b2(0x1bb)](_0x32d2b3)));},0xbb8);}return _0x59d947['ev']['on'](_0x7111fd(0x25e),async _0x387d50=>{const _0x2e943e=_0x7111fd,{connection:_0x3ae35c,lastDisconnect:_0x2ea560}=_0x387d50;try{if(_0x3ae35c==='close'){let _0x50b070=new Boom(_0x2ea560?.[_0x2e943e(0x1b1)])?.['output']['statusCode'];if(_0x50b070===DisconnectReason[_0x2e943e(0x24b)])console[_0x2e943e(0x262)](_0x2e943e(0x22e)),startXliconBotInc();else{if(_0x50b070===DisconnectReason[_0x2e943e(0x1f6)])console[_0x2e943e(0x262)]('Connection\x20closed,\x20reconnecting....'),startXliconBotInc();else{if(_0x50b070===DisconnectReason['connectionLost'])console[_0x2e943e(0x262)](_0x2e943e(0x1ae)),startXliconBotInc();else{if(_0x50b070===DisconnectReason[_0x2e943e(0x1b4)])console[_0x2e943e(0x262)](_0x2e943e(0x1d3)),startXliconBotInc();else{if(_0x50b070===DisconnectReason[_0x2e943e(0x22d)])console['log'](_0x2e943e(0x22c)),startXliconBotInc();else{if(_0x50b070===DisconnectReason['restartRequired'])console[_0x2e943e(0x262)](_0x2e943e(0x1e3)),startXliconBotInc();else{if(_0x50b070===DisconnectReason[_0x2e943e(0x211)])console[_0x2e943e(0x262)](_0x2e943e(0x209)),startXliconBotInc();else _0x59d947['end'](_0x2e943e(0x1b7)+_0x50b070+'|'+_0x3ae35c);}}}}}}}(_0x387d50[_0x2e943e(0x1f3)]==_0x2e943e(0x1db)||_0x387d50[_0x2e943e(0x213)]==_0x2e943e(0x1e1))&&console[_0x2e943e(0x262)](color(_0x2e943e(0x1aa),_0x2e943e(0x1b8))),(_0x387d50[_0x2e943e(0x1f3)]=='open'||_0x387d50[_0x2e943e(0x213)]==_0x2e943e(0x267))&&(console[_0x2e943e(0x262)](color('\x20',_0x2e943e(0x1a5))),console[_0x2e943e(0x262)](color(_0x2e943e(0x1cf)+JSON[_0x2e943e(0x226)](_0x59d947[_0x2e943e(0x22f)],null,0x2),'yellow')),await delay(0x7cf),console[_0x2e943e(0x262)](chalk[_0x2e943e(0x1b8)](_0x2e943e(0x240)+chalk[_0x2e943e(0x24d)]['blue']('[\x20'+botname+'\x20]')+'\x0a\x0a')),console['log'](color('<\x20==================================================\x20>',_0x2e943e(0x242))),console['log'](color('\x0a'+themeemoji+'\x20YT\x20CHANNEL:\x20S4\x20Salman\x20YT',_0x2e943e(0x1a5))),console[_0x2e943e(0x262)](color(themeemoji+_0x2e943e(0x1ce),_0x2e943e(0x1a5))),console[_0x2e943e(0x262)](color(themeemoji+_0x2e943e(0x21a),_0x2e943e(0x1a5))),console['log'](color(themeemoji+_0x2e943e(0x203)+owner,_0x2e943e(0x1a5))),console['log'](color(themeemoji+'\x20CREDIT:\x20'+wm+'\x0a',_0x2e943e(0x1a5))),await delay(0x3e8*0x2),_0x59d947['groupAcceptInvite'](_0x2e943e(0x1b5)));}catch(_0x234d6a){console['log'](_0x2e943e(0x1a1)+_0x234d6a),startXliconBotInc();}}),_0x59d947['ev']['on']('creds.update',_0x3ca377),_0x59d947['ev']['on']('messages.upsert',()=>{}),_0x59d947['ev']['on'](_0x7111fd(0x1e6),async _0x54252f=>{const _0x2df1a5=_0x7111fd;if(global[_0x2df1a5(0x1cc)]){console[_0x2df1a5(0x262)](_0x54252f);try{let _0x482b73=await _0x59d947[_0x2df1a5(0x256)](_0x54252f['id']),_0x465327=_0x54252f[_0x2df1a5(0x1c1)];for(let _0x146581 of _0x465327){try{ppuser=await _0x59d947[_0x2df1a5(0x1b6)](_0x146581,'image');}catch(_0x4a9177){ppuser=_0x2df1a5(0x227);}try{ppgroup=await _0x59d947[_0x2df1a5(0x1b6)](_0x54252f['id'],'image');}catch(_0x3aa3bd){ppgroup=_0x2df1a5(0x247);}memb=_0x482b73[_0x2df1a5(0x1c1)][_0x2df1a5(0x1ba)],XeonWlcm=await getBuffer(ppuser),XeonLft=await getBuffer(ppuser);if(_0x54252f[_0x2df1a5(0x27f)]=='add'){const _0x5c435e=await getBuffer(ppuser);let _0x385158=_0x146581;const _0x5866cf=moment['tz'](_0x2df1a5(0x27a))[_0x2df1a5(0x1f9)]('HH:mm:ss'),_0x4f4197=moment['tz'](_0x2df1a5(0x27a))[_0x2df1a5(0x1f9)](_0x2df1a5(0x20a)),_0x12c913=_0x482b73[_0x2df1a5(0x1c1)]['length'];xeonbody=_0x2df1a5(0x1a7)+_0x385158[_0x2df1a5(0x230)]('@')[0x0]+_0x2df1a5(0x1e4)+_0x482b73[_0x2df1a5(0x1e5)]+_0x2df1a5(0x228)+_0x12c913+'th\x20\x0a\x20\x20\x20\x20│\x20➪\x20\x20\x20*Jᴏɪɴᴇᴅ\x20:*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20'+_0x5866cf+'\x20'+_0x4f4197+_0x2df1a5(0x1e2),_0x59d947[_0x2df1a5(0x1ab)](_0x54252f['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x146581],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x2df1a5(0x250)],'body':''+ownername,'previewType':'PHOTO','thumbnailUrl':'','thumbnail':XeonWlcm,'sourceUrl':''+wagc}}});}else{if(_0x54252f[_0x2df1a5(0x27f)]==_0x2df1a5(0x1be)){const _0x71c084=await getBuffer(ppuser),_0x3509f8=moment['tz'](_0x2df1a5(0x27a))[_0x2df1a5(0x1f9)](_0x2df1a5(0x1e7)),_0x1fb996=moment['tz'](_0x2df1a5(0x27a))[_0x2df1a5(0x1f9)](_0x2df1a5(0x20a));let _0x37cfc8=_0x146581;const _0x760325=_0x482b73[_0x2df1a5(0x1c1)][_0x2df1a5(0x1ba)];xeonbody=_0x2df1a5(0x1ca)+_0x37cfc8[_0x2df1a5(0x230)]('@')[0x0]+_0x2df1a5(0x269)+_0x482b73[_0x2df1a5(0x1e5)]+_0x2df1a5(0x228)+_0x760325+_0x2df1a5(0x1fe)+_0x3509f8+'\x20'+_0x1fb996+_0x2df1a5(0x1a4),_0x59d947['sendMessage'](_0x54252f['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x146581],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x2df1a5(0x250)],'body':''+ownername,'previewType':_0x2df1a5(0x218),'thumbnailUrl':'','thumbnail':XeonLft,'sourceUrl':''+wagc}}});}}}}catch(_0x35f068){console[_0x2df1a5(0x262)](_0x35f068);}}}),_0x59d947['ev']['on'](_0x7111fd(0x27c),async _0x1144a7=>{const _0x33e9be=_0x7111fd;if(global[_0x33e9be(0x258)]){console['log'](_0x1144a7);for(let _0x35d266 of _0x1144a7){if(_0x35d266[_0x33e9be(0x239)]==![]){if(_0x35d266['status']=='offer'){let _0x54ea61=await _0x59d947[_0x33e9be(0x278)](_0x35d266[_0x33e9be(0x1fb)],'*'+_0x59d947[_0x33e9be(0x22f)]['name']+'*\x20can\x27t\x20receive\x20'+(_0x35d266[_0x33e9be(0x26a)]?_0x33e9be(0x20d):'voice')+_0x33e9be(0x27d)+_0x35d266['from'][_0x33e9be(0x230)]('@')[0x0]+_0x33e9be(0x25f));_0x59d947[_0x33e9be(0x270)](_0x35d266[_0x33e9be(0x1fb)],owner,_0x54ea61),await sleep(0x1f40),await _0x59d947['updateBlockStatus'](_0x35d266['from'],_0x33e9be(0x1de));}}}}}),_0x59d947['ev']['on'](_0x7111fd(0x1da),async _0x11530a=>{const _0x35a1b5=_0x7111fd;global[_0x35a1b5(0x219)]&&(mek=_0x11530a[_0x35a1b5(0x214)][0x0],mek[_0x35a1b5(0x257)]&&mek[_0x35a1b5(0x257)]['remoteJid']===_0x35a1b5(0x273)&&await _0x59d947['readMessages']([mek[_0x35a1b5(0x257)]]));}),_0x59d947['ev']['on'](_0x7111fd(0x1e6),async _0x15d028=>{const _0x3932dd=_0x7111fd;if(global[_0x3932dd(0x1f7)]){console['log'](_0x15d028);try{let _0x5f46f6=_0x15d028[_0x3932dd(0x1c1)];for(let _0x1ccde3 of _0x5f46f6){try{ppuser=await _0x59d947['profilePictureUrl'](_0x1ccde3,_0x3932dd(0x1bc));}catch(_0x41cf47){ppuser='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}try{ppgroup=await _0x59d947[_0x3932dd(0x1b6)](_0x15d028['id'],_0x3932dd(0x1bc));}catch(_0x512c10){ppgroup='https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';}if(_0x15d028['action']=='promote'){const _0x1a30e5=moment['tz'](_0x3932dd(0x27a))[_0x3932dd(0x1f9)](_0x3932dd(0x1e7)),_0x566b78=moment['tz'](_0x3932dd(0x27a))[_0x3932dd(0x1f9)]('DD/MM/YYYY');let _0x1d10d2=_0x1ccde3;xeonbody=_0x3932dd(0x1bf)+_0x1d10d2['split']('@')[0x0]+_0x3932dd(0x237),_0x59d947[_0x3932dd(0x1ab)](_0x15d028['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x1ccde3],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global['botname'],'body':''+ownername,'previewType':_0x3932dd(0x218),'thumbnailUrl':'','thumbnail':XeonWlcm,'sourceUrl':''+wagc}}});}else{if(_0x15d028[_0x3932dd(0x27f)]==_0x3932dd(0x26e)){const _0xb8c449=moment['tz'](_0x3932dd(0x27a))[_0x3932dd(0x1f9)]('HH:mm:ss'),_0x45d5b9=moment['tz']('Asia/Kolkata')['format'](_0x3932dd(0x20a));let _0x44e459=_0x1ccde3;xeonbody=_0x3932dd(0x279)+_0x44e459[_0x3932dd(0x230)]('@')[0x0]+',\x20you\x20have\x20been\x20*demoted*\x20from\x20*admin*\x20😬',_0x59d947[_0x3932dd(0x1ab)](_0x15d028['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x1ccde3],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x3932dd(0x250)],'body':''+ownername,'previewType':_0x3932dd(0x218),'thumbnailUrl':'','thumbnail':XeonLft,'sourceUrl':''+wagc}}});}}}}catch(_0x36d776){console['log'](_0x36d776);}}}),_0x59d947['ev']['on'](_0x7111fd(0x241),async _0x4720c1=>{const _0x1381c1=_0x7111fd;if(global[_0x1381c1(0x261)]){try{ppgroup=await _0x59d947[_0x1381c1(0x1b6)](anu['id'],_0x1381c1(0x1bc));}catch(_0x3ba092){ppgroup=_0x1381c1(0x247);}console['log'](_0x4720c1);const _0x3523f3=_0x4720c1[0x0];if(_0x3523f3[_0x1381c1(0x1fc)]==!![])await sleep(0x7d0),_0x59d947[_0x1381c1(0x1ab)](_0x3523f3['id'],{'text':'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20has\x20been\x20closed\x20by\x20admin,\x20Now\x20only\x20admins\x20can\x20send\x20messages\x20!'});else{if(_0x3523f3[_0x1381c1(0x1fc)]==![])await sleep(0x7d0),_0x59d947[_0x1381c1(0x1ab)](_0x3523f3['id'],{'text':'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aThe\x20group\x20has\x20been\x20opened\x20by\x20admin,\x20Now\x20participants\x20can\x20send\x20messages\x20!'});else{if(_0x3523f3[_0x1381c1(0x210)]==!![])await sleep(0x7d0),_0x59d947[_0x1381c1(0x1ab)](_0x3523f3['id'],{'text':_0x1381c1(0x224)});else{if(_0x3523f3[_0x1381c1(0x210)]==![])await sleep(0x7d0),_0x59d947[_0x1381c1(0x1ab)](_0x3523f3['id'],{'text':_0x1381c1(0x26c)});else!_0x3523f3[_0x1381c1(0x231)]==''?(await sleep(0x7d0),_0x59d947[_0x1381c1(0x1ab)](_0x3523f3['id'],{'text':'「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20description\x20has\x20been\x20changed\x20to*\x0a\x0a'+_0x3523f3[_0x1381c1(0x231)]})):(await sleep(0x7d0),_0x59d947[_0x1381c1(0x1ab)](_0x3523f3['id'],{'text':'「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20name\x20has\x20been\x20changed\x20to*\x0a\x0a*'+_0x3523f3[_0x1381c1(0x1e5)]+'*'}));}}}}}),_0x59d947['ev']['on']('messages.upsert',async _0x17c34d=>{const _0x4bd3da=_0x7111fd;try{mek=_0x17c34d['messages'][0x0];if(!mek[_0x4bd3da(0x1ff)])return;mek[_0x4bd3da(0x1ff)]=Object[_0x4bd3da(0x202)](mek[_0x4bd3da(0x1ff)])[0x0]===_0x4bd3da(0x223)?mek[_0x4bd3da(0x1ff)][_0x4bd3da(0x223)][_0x4bd3da(0x1ff)]:mek['message'];if(mek[_0x4bd3da(0x257)]&&mek[_0x4bd3da(0x257)][_0x4bd3da(0x1c6)]==='status@broadcast')return;if(!_0x59d947['public']&&!mek[_0x4bd3da(0x257)][_0x4bd3da(0x22a)]&&_0x17c34d[_0x4bd3da(0x207)]==='notify')return;if(mek[_0x4bd3da(0x257)]['id']['startsWith'](_0x4bd3da(0x274))&&mek[_0x4bd3da(0x257)]['id']['length']===0x10)return;if(mek['key']['id'][_0x4bd3da(0x25d)]('BAE5'))return;m=smsg(_0x59d947,mek,store),require('./XLICON-V3')(_0x59d947,m,_0x17c34d,store);}catch(_0x4a1cad){console['log'](_0x4a1cad);}}),_0x59d947[_0x7111fd(0x221)]=_0x23ee1b=>{const _0x33aac5=_0x7111fd;if(!_0x23ee1b)return _0x23ee1b;if(/:\d+@/gi['test'](_0x23ee1b)){let _0x583973=jidDecode(_0x23ee1b)||{};return _0x583973['user']&&_0x583973[_0x33aac5(0x234)]&&_0x583973[_0x33aac5(0x22f)]+'@'+_0x583973[_0x33aac5(0x234)]||_0x23ee1b;}else return _0x23ee1b;},_0x59d947['ev']['on'](_0x7111fd(0x20c),_0xf6b448=>{const _0x4b5b11=_0x7111fd;for(let _0x1eed3a of _0xf6b448){let _0x50a2e8=_0x59d947[_0x4b5b11(0x221)](_0x1eed3a['id']);if(store&&store['contacts'])store[_0x4b5b11(0x251)][_0x50a2e8]={'id':_0x50a2e8,'name':_0x1eed3a['notify']};}}),_0x59d947[_0x7111fd(0x1d5)]=(_0x3d83c7,_0x4eb50c=![])=>{const _0xecacfc=_0x7111fd;id=_0x59d947[_0xecacfc(0x221)](_0x3d83c7),_0x4eb50c=_0x59d947['withoutContact']||_0x4eb50c;let _0x2339c8;if(id[_0xecacfc(0x1b2)](_0xecacfc(0x1a2)))return new Promise(async _0x20404f=>{const _0x47ce37=_0xecacfc;_0x2339c8=store[_0x47ce37(0x251)][id]||{};if(!(_0x2339c8[_0x47ce37(0x222)]||_0x2339c8['subject']))_0x2339c8=_0x59d947[_0x47ce37(0x256)](id)||{};_0x20404f(_0x2339c8[_0x47ce37(0x222)]||_0x2339c8[_0x47ce37(0x1e5)]||PhoneNumber('+'+id[_0x47ce37(0x281)]('@s.whatsapp.net',''))[_0x47ce37(0x1eb)](_0x47ce37(0x220)));});else _0x2339c8=id===_0xecacfc(0x1b9)?{'id':id,'name':_0xecacfc(0x19f)}:id===_0x59d947['decodeJid'](_0x59d947[_0xecacfc(0x22f)]['id'])?_0x59d947['user']:store[_0xecacfc(0x251)][id]||{};return(_0x4eb50c?'':_0x2339c8[_0xecacfc(0x222)])||_0x2339c8[_0xecacfc(0x1e5)]||_0x2339c8[_0xecacfc(0x27b)]||PhoneNumber('+'+_0x3d83c7['replace'](_0xecacfc(0x1f0),''))[_0xecacfc(0x1eb)](_0xecacfc(0x220));},_0x59d947[_0x7111fd(0x270)]=async(_0x5a99db,_0x4d6a0e,_0x456931='',_0x55d2e3={})=>{const _0xdc80d9=_0x7111fd;let _0x4a2e61=[];for(let _0x15d776 of _0x4d6a0e){_0x4a2e61[_0xdc80d9(0x208)]({'displayName':await _0x59d947[_0xdc80d9(0x1d5)](_0x15d776),'vcard':_0xdc80d9(0x206)+await _0x59d947['getName'](_0x15d776)+'\x0aFN:'+await _0x59d947[_0xdc80d9(0x1d5)](_0x15d776)+_0xdc80d9(0x236)+_0x15d776[_0xdc80d9(0x230)]('@')[0x0]+':'+_0x15d776[_0xdc80d9(0x230)]('@')[0x0]+'\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD'});}_0x59d947[_0xdc80d9(0x1ab)](_0x5a99db,{'contacts':{'displayName':_0x4a2e61[_0xdc80d9(0x1ba)]+'\x20Contact','contacts':_0x4a2e61},..._0x55d2e3},{'quoted':_0x456931});},_0x59d947[_0x7111fd(0x216)]=!![],_0x59d947[_0x7111fd(0x244)]=_0x3df0f2=>smsg(_0x59d947,_0x3df0f2,store),_0x59d947['sendText']=(_0x5ae360,_0xfcebe3,_0x45f201='',_0x335b82)=>_0x59d947[_0x7111fd(0x1ab)](_0x5ae360,{'text':_0xfcebe3,..._0x335b82},{'quoted':_0x45f201,..._0x335b82}),_0x59d947['sendImage']=async(_0x562450,_0x2011ed,_0x1d8bf5='',_0xde8497='',_0x3b7488)=>{const _0x1a7171=_0x7111fd;let _0x58a02b=Buffer[_0x1a7171(0x1c9)](_0x2011ed)?_0x2011ed:/^data:.*?\/.*?;base64,/i[_0x1a7171(0x1ed)](_0x2011ed)?Buffer[_0x1a7171(0x1fb)](_0x2011ed['split']`,`[0x1],_0x1a7171(0x21f)):/^https?:\/\//[_0x1a7171(0x1ed)](_0x2011ed)?await await getBuffer(_0x2011ed):fs[_0x1a7171(0x26d)](_0x2011ed)?fs[_0x1a7171(0x275)](_0x2011ed):Buffer[_0x1a7171(0x1bd)](0x0);return await _0x59d947[_0x1a7171(0x1ab)](_0x562450,{'image':_0x58a02b,'caption':_0x1d8bf5,..._0x3b7488},{'quoted':_0xde8497});},_0x59d947['sendTextWithMentions']=async(_0x1e5b68,_0xe953cd,_0x75aa1,_0x19c557={})=>_0x59d947[_0x7111fd(0x1ab)](_0x1e5b68,{'text':_0xe953cd,'mentions':[..._0xe953cd[_0x7111fd(0x1ee)](/@(\d{0,16})/g)][_0x7111fd(0x1ef)](_0x2b3cdb=>_0x2b3cdb[0x1]+_0x7111fd(0x1f0)),..._0x19c557},{'quoted':_0x75aa1}),_0x59d947[_0x7111fd(0x246)]=async(_0xe8d53,_0x4e8a24,_0x5d0292,_0x34f7f9={})=>{const _0x4dd64b=_0x7111fd;let _0x563742=Buffer[_0x4dd64b(0x1c9)](_0x4e8a24)?_0x4e8a24:/^data:.*?\/.*?;base64,/i['test'](_0x4e8a24)?Buffer['from'](_0x4e8a24[_0x4dd64b(0x230)]`,`[0x1],_0x4dd64b(0x21f)):/^https?:\/\//['test'](_0x4e8a24)?await await getBuffer(_0x4e8a24):fs[_0x4dd64b(0x26d)](_0x4e8a24)?fs[_0x4dd64b(0x275)](_0x4e8a24):Buffer['alloc'](0x0),_0x8b56a2;_0x34f7f9&&(_0x34f7f9[_0x4dd64b(0x235)]||_0x34f7f9[_0x4dd64b(0x204)])?_0x8b56a2=await writeExifImg(_0x563742,_0x34f7f9):_0x8b56a2=await imageToWebp(_0x563742),await _0x59d947[_0x4dd64b(0x1ab)](_0xe8d53,{'sticker':{'url':_0x8b56a2},..._0x34f7f9},{'quoted':_0x5d0292})['then'](_0x4b83b1=>{const _0x51a36c=_0x4dd64b;return fs[_0x51a36c(0x249)](_0x8b56a2),_0x4b83b1;});},_0x59d947[_0x7111fd(0x1d9)]=async(_0x4686ec,_0x21ab9d,_0x32febb,_0x1c728f={})=>{const _0x2d186d=_0x7111fd;let _0x2142cc=Buffer[_0x2d186d(0x1c9)](_0x21ab9d)?_0x21ab9d:/^data:.*?\/.*?;base64,/i[_0x2d186d(0x1ed)](_0x21ab9d)?Buffer[_0x2d186d(0x1fb)](_0x21ab9d[_0x2d186d(0x230)]`,`[0x1],_0x2d186d(0x21f)):/^https?:\/\//[_0x2d186d(0x1ed)](_0x21ab9d)?await await getBuffer(_0x21ab9d):fs['existsSync'](_0x21ab9d)?fs[_0x2d186d(0x275)](_0x21ab9d):Buffer[_0x2d186d(0x1bd)](0x0),_0x24f985;return _0x1c728f&&(_0x1c728f[_0x2d186d(0x235)]||_0x1c728f[_0x2d186d(0x204)])?_0x24f985=await writeExifVid(_0x2142cc,_0x1c728f):_0x24f985=await videoToWebp(_0x2142cc),await _0x59d947[_0x2d186d(0x1ab)](_0x4686ec,{'sticker':{'url':_0x24f985},..._0x1c728f},{'quoted':_0x32febb}),_0x24f985;},_0x59d947[_0x7111fd(0x1d7)]=async(_0x233b3a,_0x28bb65,_0x1aff0e=!![])=>{const _0x1c8cef=_0x7111fd;let _0x2db666=_0x233b3a[_0x1c8cef(0x20b)]?_0x233b3a[_0x1c8cef(0x20b)]:_0x233b3a,_0x5592bd=(_0x233b3a[_0x1c8cef(0x20b)]||_0x233b3a)[_0x1c8cef(0x1ec)]||'',_0x1a5152=_0x233b3a['mtype']?_0x233b3a[_0x1c8cef(0x23d)][_0x1c8cef(0x281)](/Message/gi,''):_0x5592bd['split']('/')[0x0];const _0x3e77c2=await downloadContentFromMessage(_0x2db666,_0x1a5152);let _0x18343b=Buffer[_0x1c8cef(0x1fb)]([]);for await(const _0x2b385b of _0x3e77c2){_0x18343b=Buffer['concat']([_0x18343b,_0x2b385b]);}let _0xbbeeb1=await FileType[_0x1c8cef(0x1d1)](_0x18343b);return trueFileName=_0x1aff0e?_0x28bb65+'.'+_0xbbeeb1[_0x1c8cef(0x201)]:_0x28bb65,await fs['writeFileSync'](trueFileName,_0x18343b),trueFileName;},_0x59d947[_0x7111fd(0x20f)]=async(_0x5936b8,_0x1814bf,_0x45714e=![],_0x5b3d76={})=>{const _0x47c628=_0x7111fd;let _0x4aecbe;_0x5b3d76['readViewOnce']&&(_0x1814bf['message']=_0x1814bf[_0x47c628(0x1ff)]&&_0x1814bf[_0x47c628(0x1ff)][_0x47c628(0x223)]&&_0x1814bf[_0x47c628(0x1ff)][_0x47c628(0x223)][_0x47c628(0x1ff)]?_0x1814bf[_0x47c628(0x1ff)][_0x47c628(0x223)][_0x47c628(0x1ff)]:_0x1814bf['message']||undefined,_0x4aecbe=Object['keys'](_0x1814bf['message'][_0x47c628(0x225)][_0x47c628(0x1ff)])[0x0],delete(_0x1814bf[_0x47c628(0x1ff)]&&_0x1814bf['message'][_0x47c628(0x238)]?_0x1814bf[_0x47c628(0x1ff)][_0x47c628(0x238)]:_0x1814bf[_0x47c628(0x1ff)]||undefined),delete _0x1814bf[_0x47c628(0x1ff)]['viewOnceMessage'][_0x47c628(0x1ff)][_0x4aecbe][_0x47c628(0x265)],_0x1814bf[_0x47c628(0x1ff)]={..._0x1814bf[_0x47c628(0x1ff)][_0x47c628(0x225)][_0x47c628(0x1ff)]});let _0x3ad30b=Object[_0x47c628(0x202)](_0x1814bf[_0x47c628(0x1ff)])[0x0],_0x28feb7=await generateForwardMessageContent(_0x1814bf,_0x45714e),_0x41840d=Object[_0x47c628(0x202)](_0x28feb7)[0x0],_0x48dad5={};if(_0x3ad30b!=_0x47c628(0x229))_0x48dad5=_0x1814bf[_0x47c628(0x1ff)][_0x3ad30b][_0x47c628(0x1cd)];_0x28feb7[_0x41840d][_0x47c628(0x1cd)]={..._0x48dad5,..._0x28feb7[_0x41840d]['contextInfo']};const _0x34d8d2=await generateWAMessageFromContent(_0x5936b8,_0x28feb7,_0x5b3d76?{..._0x28feb7[_0x41840d],..._0x5b3d76,..._0x5b3d76['contextInfo']?{'contextInfo':{..._0x28feb7[_0x41840d]['contextInfo'],..._0x5b3d76[_0x47c628(0x1cd)]}}:{}}:{});return await _0x59d947[_0x47c628(0x217)](_0x5936b8,_0x34d8d2[_0x47c628(0x1ff)],{'messageId':_0x34d8d2[_0x47c628(0x257)]['id']}),_0x34d8d2;},_0x59d947[_0x7111fd(0x232)]=(_0x51226e,_0x407043='',_0x38401e=[],_0x20574d=0x1)=>{const _0x133554=_0x7111fd;return _0x59d947[_0x133554(0x1ab)](_0x51226e,{'poll':{'name':_0x407043,'values':_0x38401e,'selectableCount':_0x20574d}});},_0x59d947[_0x7111fd(0x271)]=(_0x17d86a='')=>{const _0x4b1526=_0x7111fd;return[..._0x17d86a[_0x4b1526(0x1ee)](/@([0-9]{5,16}|0)/g)]['map'](_0x1d4274=>_0x1d4274[0x1]+'@s.whatsapp.net');},_0x59d947['downloadMediaMessage']=async _0x58d611=>{const _0x5b3a66=_0x7111fd;let _0xc0ffbc=(_0x58d611[_0x5b3a66(0x20b)]||_0x58d611)['mimetype']||'',_0x526f5b=_0x58d611['mtype']?_0x58d611[_0x5b3a66(0x23d)][_0x5b3a66(0x281)](/Message/gi,''):_0xc0ffbc[_0x5b3a66(0x230)]('/')[0x0];const _0x53ad89=await downloadContentFromMessage(_0x58d611,_0x526f5b);let _0x1f979c=Buffer[_0x5b3a66(0x1fb)]([]);for await(const _0x2078b6 of _0x53ad89){_0x1f979c=Buffer[_0x5b3a66(0x259)]([_0x1f979c,_0x2078b6]);}return _0x1f979c;},_0x59d947;}startXliconBotInc(),process['on'](_0x406e78(0x1d4),function(_0x28fde7){const _0x33b6b1=_0x406e78;let _0x4345ab=String(_0x28fde7);if(_0x4345ab[_0x33b6b1(0x1b0)](_0x33b6b1(0x26b)))return;if(_0x4345ab[_0x33b6b1(0x1b0)]('Socket\x20connection\x20timeout'))return;if(_0x4345ab[_0x33b6b1(0x1b0)](_0x33b6b1(0x1ad)))return;if(_0x4345ab[_0x33b6b1(0x1b0)](_0x33b6b1(0x20e)))return;if(_0x4345ab[_0x33b6b1(0x1b0)]('rate-overlimit'))return;if(_0x4345ab['includes']('Connection\x20Closed'))return;if(_0x4345ab[_0x33b6b1(0x1b0)](_0x33b6b1(0x233)))return;if(_0x4345ab['includes'](_0x33b6b1(0x255)))return;console['log'](_0x33b6b1(0x24c),_0x28fde7);});
