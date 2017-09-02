'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('ChannelChanger');
var intentHandler = require('./intentHandler');

app.intent('ChannelChanger', {
    'slots': {
        'Channel': 'TV_CHANNELS'
    },
    'utterances': [
        'change the channel to {channelList|TV_CHANNELS}',
        'switch to {channelList|TV_CHANNELS}',
        'change channel to {channelList|TV_CHANNELS}'
    ]}, intentHandler.ChannelChanger);

app.launch(intentHandler.launch);
app.error = intentHandler.error;
app.intent('AMAZON.HelpIntent', intentHandler.help);
app.intent('AMAZON.StopIntent', intentHandler.stop);
app.intent('AMAZON.CancelIntent', intentHandler.cancel);
app.dictionary = {"channelList" : ["Virgin Media Previews","BBC One","BBC Two","ITV","Channel Four","Channel Five","BBC Three","BBC Four",
"BBC One HD","Sky One HD","Sky One","Sky Living HD","Sky Living","ITV HD","ITV Plus One","ITVTwo",
"ITVTwo Plus One","ITVThree","ITVFour","ITVBe","ITVBe Plus One","Sky Two","Sky Arts","Pick","Gold",
"W","alibi","Dave","Drama","Really","alibi Plus One","W Plus One","Comedy Central","Comedy Central Plus One",
"MTV","Syfy","Syfy Plus One","Universal Channel","Universal Channel Plus One","Challenge","Sky Living Plus One",
"Channel Four HD","Channel Four Plus One","Fourseven","EFour","EFour HD","EFour Plus One","MoreFour",
"CBS Reality","Horror Channel","Channel Five HD","FiveSTAR","MyFive","Five USA","Spike",
"Channel Five Plus One","E","FOX","FOX Plus One","Local TV Channel","Real Lives","BBC Alba",
"BBC Two HD","BBC Four HD","Universal Channel HD","Syfy HD","SFourC","TLC","TLC HD","TLC Plus One",
"Investigation Discovery","Investigation Discovery Plus One","Quest","Quest Plus One","ITVThree Plus One",
"ITVFour Plus One","ITVTwo HD","ITVThree HD","ITVFour HD","ITVBe HD","Challenge Plus One",
"Comedy Central HD","Comedy Central Extra","MTV HD","BET","Five USA Plus One","FiveSTAR Plus One",
"Gold Plus One","W HD","CBS Action","Sony Channel","Dave HD","MoreFour HD","More Four Plus One",
"CBS Drama","YouTube","FOX HD","alibi HD","CBS Reality Plus One","Horror Channel Plus One","FourSeven HD",
"Netflix","Sky Arts HD","Real Lives Plus One","Lifetime","Lifetime HD","hayu","Dave ja vu",
"TruTV","DMAX","DMAX Plus One","Quest Red","Blaze","Yesterday","Yesterday Plus One","Eden",
"Eden Plus One","Eden HD","Discovery Channel","Discovery Channel HD","Discovery Channel Plus One",
"Animal Planet","Animal Planet HD","Animal Planet Plus One","Discovery Science",
"Discovery Science Plus One","Discovery Turbo","Discovery History","Discovery History Plus One",
"Nat Geo Wild","Nat Geo Wild HD","National Geographic Channel","National Geographic Channel Plus One",
"National Geographic Channel HD","Community Channel","History","History Plus One","HTwo",
"HTwo HD","Crime Plus  Investigation","PBS America","Forces TV","Good Food","Good Food Plus One",
"Good Food HD","Home","Home Plus One","Discovery Home and Health","Discovery Home and Health Plus One",
"Discovery Shed","GOD Channel","GINX eSports TV","Food Network","Travel Channel","VTV Music On Demand",
"MTV Music","MTV Live HD","MTV Hits","MTV Base","MTV Dance","MTV Rocks","VHOne","Viva","Box Upfront",
"The Box","Box Hits","FourMusic","Kiss","Magic","Kerrang TV","Vintage TV","Vevo",
"Clubland TV","Virgin Movies Previews","Sky Cinema Premiere HD","Sky Cinema Hits HD",
"Sky Cinema Greats HD","Sky Cinema Disney HD","Sky Cinema Family HD","Sky Cinema Action and Adventure HD",
"Sky Cinema Comedy HD","Sky Cinema Crime and Thriller HD","Sky Cinema Drama and Romance HD",
"Sky Cinema Sci Fi and Horror HD","Sky Cinema Select HD","TCM","TCM HD","TCM Plus One",
"Movies TwoFour","Movies TwoFourPlus ","True Movies One","Sony Movie Channel","MoviesFourMen",
"FilmFour","FilmFour HD","FilmFour Plus One","Sky Cinema Premiere","Sky Cinema Premiere Plus One",
"Sky Cinema Hits","Sky Cinema Greats","Sky Cinema Disney","Sky Cinema Family",
"Sky Cinema Action and Adventure","Sky Cinema Comedy","Sky Cinema Crime and Thriller",
"Sky Cinema Drama and Romance","Sky Cinema Sci Fi and Horror","Sky Cinema Select","Talking Pictures TV",
"Sky Sports Main Event HD","Sky Sports Premier League HD","Sky Sports Football HD","Sky Sports Cricket HD",
"Sky Sports Golf HD","Sky Sports FOne HD","Sky Sports Action HD","Sky Sports Arena HD","Sky Sports News HD",
"Sky Sports Mix HD","Sky Sports Main Event","Sky Sports Premier League","Sky Sports Football",
"Sky Sports Cricket","Sky Sports Golf","Sky Sports FOne","Sky Sports Action","Sky Sports Arena",
"Sky Sports News","Sky Sports Mix","Eurosport One HD","Eurosport Two HD","Eurosport One","Eurosport Two",
"MUTV","BT Sport One HD","BT Sport Two HD","BT Sport Three HD","BT Sport ESPN HD","BT Sport One",
"BT Sport Two","BT Sport Three","BT Sport ESPN","At The Races","Racing UK","Liverpool FC TV",
"Motorsport.tv","Box Nation","BT Sport Showcase","Premier Sports","Bike","BBC News","Sky News",
"Sky News HD","BBC News HD","BBC Parliament","CNN International","Bloomberg","CNBC Europe",
"Euronews","NDTV TwoFourxSeven","Al Jazeera English","France TwoFour","NHK World HD",
"Virgin Media Kids","CBBC","CBeebies","BabyTV","Cartoon Network","Cartoon Network Plus One",
"Cartoonito","Disney XD","Disney XD Plus One","CBBC HD","CBeebies HD","Nickelodeon",
"Nick Plus One","Nick HD","Nick Jr.","Nick Jr. Too","Nicktoons","Disney Channel","Disney Channel Plus One",
"Disney Junior","Boomerang","Boomerang Plus One","Cartoon Network HD","CITV","BabyFirst",
"POP","Tiny Pop","Kix Power","QVC","QVC Beauty","QVC Style","Ideal World","Create and Craft","Gems TV",
"Jewellery Maker","TJC","Star Gold","Star Plus","Life OK","SET","MAX","SAB","Zee TV",
"Zee Cinema","andTV","Zee Punjabi","Zing","BFourU Movies","BFourU Music","TVFive MONDE",
"Colors TV","Rishtey","NDTV Good Times","UTV Movies","Al Jazeera Arabic","France TwoFour French",
"Hum Europe","Worldbox","Nigeria","NDTV India","NDTV Spice","Islam Channel UK","Islam Channel Urdu",
"Brit Asia TV","BBC One Audio Description","BBC Two Audio Description","ITV Audio Description",
"Channel Four Audio Description","Channel Five Audio Description","SFourC Audio Description","BBC One England",
"BBC One Scotland","BBC One Northern Ireland","BBC One Wales","BBC Two England",
"RTE One","RTETwo","TGFour",
"BBC Radio One","BBC Radio Two","BBC Radio Three","BBC Radio Four FM","BBC Radio Five Live",
"BBC World Service","BBC Radio OneXtra","BBC Radio Five Live Sports Extra","BBC Radio Six Music",
"BBC Radio Four Extra","BBC Radio Four Long Wave","BBC Asian Network","BBC Local Radio",
"Absolute Radio","Smooth Radio","RTE Radio","Heart FM","LBC News","World Radio Network",
"Heart EightZeros","Classic FM","Planet Rock","Talksport","Magic Radio","BBC Radio Scotland",
"BBC Radio Wales","BBC Radio Ulster","BBC Radio Cymru",
"Absolute Radio EightZeros","Absolute Classic Rock","Capital FM","Capital XTRA",
"Radio X","Kiss FM","Adult Previews","Television X Nightly","Playboy TV Nightly",
"Adult Channel","XXX Brits","Xrated FourZeroPlus ","Xrated Couples",
"Xrated Hook-Ups","Television X","Playboy TV","Babenation"]};
module.exports = app;
