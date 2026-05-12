gdjs.PlaySceneCode = {};
gdjs.PlaySceneCode.localVariables = [];
gdjs.PlaySceneCode.idToCallbackMap = new Map();
gdjs.PlaySceneCode.GDFireButtonObjects2_1final = [];

gdjs.PlaySceneCode.GDLeftButtonObjects3_1final = [];

gdjs.PlaySceneCode.GDRightButtonObjects2_1final = [];

gdjs.PlaySceneCode.GDTopButtonObjects2_1final = [];

gdjs.PlaySceneCode.GDTopButtonObjects3_1final = [];

gdjs.PlaySceneCode.forEachIndex3 = 0;

gdjs.PlaySceneCode.forEachObjects3 = [];

gdjs.PlaySceneCode.forEachTemporary3 = null;

gdjs.PlaySceneCode.forEachTotalCount3 = 0;

gdjs.PlaySceneCode.GDStarship_95951Objects1= [];
gdjs.PlaySceneCode.GDStarship_95951Objects2= [];
gdjs.PlaySceneCode.GDStarship_95951Objects3= [];
gdjs.PlaySceneCode.GDStarship_95951Objects4= [];
gdjs.PlaySceneCode.GDBulletObjects1= [];
gdjs.PlaySceneCode.GDBulletObjects2= [];
gdjs.PlaySceneCode.GDBulletObjects3= [];
gdjs.PlaySceneCode.GDBulletObjects4= [];
gdjs.PlaySceneCode.GDLifeBarObjects1= [];
gdjs.PlaySceneCode.GDLifeBarObjects2= [];
gdjs.PlaySceneCode.GDLifeBarObjects3= [];
gdjs.PlaySceneCode.GDLifeBarObjects4= [];
gdjs.PlaySceneCode.GDGameOverObjects1= [];
gdjs.PlaySceneCode.GDGameOverObjects2= [];
gdjs.PlaySceneCode.GDGameOverObjects3= [];
gdjs.PlaySceneCode.GDGameOverObjects4= [];
gdjs.PlaySceneCode.GDDeathShipParticleObjects1= [];
gdjs.PlaySceneCode.GDDeathShipParticleObjects2= [];
gdjs.PlaySceneCode.GDDeathShipParticleObjects3= [];
gdjs.PlaySceneCode.GDDeathShipParticleObjects4= [];
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects1= [];
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects2= [];
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects3= [];
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects4= [];
gdjs.PlaySceneCode.GDDebrisHugeObjects1= [];
gdjs.PlaySceneCode.GDDebrisHugeObjects2= [];
gdjs.PlaySceneCode.GDDebrisHugeObjects3= [];
gdjs.PlaySceneCode.GDDebrisHugeObjects4= [];
gdjs.PlaySceneCode.GDDebrisMediumObjects1= [];
gdjs.PlaySceneCode.GDDebrisMediumObjects2= [];
gdjs.PlaySceneCode.GDDebrisMediumObjects3= [];
gdjs.PlaySceneCode.GDDebrisMediumObjects4= [];
gdjs.PlaySceneCode.GDDebrisSmallObjects1= [];
gdjs.PlaySceneCode.GDDebrisSmallObjects2= [];
gdjs.PlaySceneCode.GDDebrisSmallObjects3= [];
gdjs.PlaySceneCode.GDDebrisSmallObjects4= [];
gdjs.PlaySceneCode.GDBulletHitObjects1= [];
gdjs.PlaySceneCode.GDBulletHitObjects2= [];
gdjs.PlaySceneCode.GDBulletHitObjects3= [];
gdjs.PlaySceneCode.GDBulletHitObjects4= [];
gdjs.PlaySceneCode.GDBulletFlashObjects1= [];
gdjs.PlaySceneCode.GDBulletFlashObjects2= [];
gdjs.PlaySceneCode.GDBulletFlashObjects3= [];
gdjs.PlaySceneCode.GDBulletFlashObjects4= [];
gdjs.PlaySceneCode.GDStarBackgroundObjects1= [];
gdjs.PlaySceneCode.GDStarBackgroundObjects2= [];
gdjs.PlaySceneCode.GDStarBackgroundObjects3= [];
gdjs.PlaySceneCode.GDStarBackgroundObjects4= [];
gdjs.PlaySceneCode.GDMotionTrailObjects1= [];
gdjs.PlaySceneCode.GDMotionTrailObjects2= [];
gdjs.PlaySceneCode.GDMotionTrailObjects3= [];
gdjs.PlaySceneCode.GDMotionTrailObjects4= [];
gdjs.PlaySceneCode.GDTutorialTextObjects1= [];
gdjs.PlaySceneCode.GDTutorialTextObjects2= [];
gdjs.PlaySceneCode.GDTutorialTextObjects3= [];
gdjs.PlaySceneCode.GDTutorialTextObjects4= [];
gdjs.PlaySceneCode.GDContinueTextObjects1= [];
gdjs.PlaySceneCode.GDContinueTextObjects2= [];
gdjs.PlaySceneCode.GDContinueTextObjects3= [];
gdjs.PlaySceneCode.GDContinueTextObjects4= [];
gdjs.PlaySceneCode.GDRightButtonObjects1= [];
gdjs.PlaySceneCode.GDRightButtonObjects2= [];
gdjs.PlaySceneCode.GDRightButtonObjects3= [];
gdjs.PlaySceneCode.GDRightButtonObjects4= [];
gdjs.PlaySceneCode.GDLeftButtonObjects1= [];
gdjs.PlaySceneCode.GDLeftButtonObjects2= [];
gdjs.PlaySceneCode.GDLeftButtonObjects3= [];
gdjs.PlaySceneCode.GDLeftButtonObjects4= [];
gdjs.PlaySceneCode.GDTopButtonObjects1= [];
gdjs.PlaySceneCode.GDTopButtonObjects2= [];
gdjs.PlaySceneCode.GDTopButtonObjects3= [];
gdjs.PlaySceneCode.GDTopButtonObjects4= [];
gdjs.PlaySceneCode.GDFireButtonObjects1= [];
gdjs.PlaySceneCode.GDFireButtonObjects2= [];
gdjs.PlaySceneCode.GDFireButtonObjects3= [];
gdjs.PlaySceneCode.GDFireButtonObjects4= [];
gdjs.PlaySceneCode.GDBuggerObjects1= [];
gdjs.PlaySceneCode.GDBuggerObjects2= [];
gdjs.PlaySceneCode.GDBuggerObjects3= [];
gdjs.PlaySceneCode.GDBuggerObjects4= [];
gdjs.PlaySceneCode.GDNewSpriteObjects1= [];
gdjs.PlaySceneCode.GDNewSpriteObjects2= [];
gdjs.PlaySceneCode.GDNewSpriteObjects3= [];
gdjs.PlaySceneCode.GDNewSpriteObjects4= [];
gdjs.PlaySceneCode.GDDialogue_9595TextObjects1= [];
gdjs.PlaySceneCode.GDDialogue_9595TextObjects2= [];
gdjs.PlaySceneCode.GDDialogue_9595TextObjects3= [];
gdjs.PlaySceneCode.GDDialogue_9595TextObjects4= [];


gdjs.PlaySceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.PlaySceneCode.GDTutorialTextObjects2);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "MultiTouchControls", 0, 0, 0);
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDTutorialTextObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.PlaySceneCode.GDBuggerObjects1 */
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects1.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.random(3));
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects1.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects1[i].setAngle(gdjs.random(360));
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects1.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects1[i].setPosition(gdjs.PlaySceneCode.GDBuggerObjects1[i].getX() +(gdjs.randomInRange(-(32), 32)),gdjs.PlaySceneCode.GDBuggerObjects1[i].getY() +(gdjs.randomInRange(-(32), 32)));
}
}
}

}


};gdjs.PlaySceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bugger"), gdjs.PlaySceneCode.GDBuggerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Intro");
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects1.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects1[i].resetTimer("Reload Time");
}
}

{ //Subevents
gdjs.PlaySceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDialogue_95959595TextObjects1Objects = Hashtable.newFrom({"Dialogue_Text": gdjs.PlaySceneCode.GDDialogue_9595TextObjects1});
gdjs.PlaySceneCode.asyncCallback15224092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PlaySceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dialogue_Text"), gdjs.PlaySceneCode.GDDialogue_9595TextObjects2);

{for(var i = 0, len = gdjs.PlaySceneCode.GDDialogue_9595TextObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDDialogue_9595TextObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("GamePlaying");
}
gdjs.PlaySceneCode.localVariables.length = 0;
}
gdjs.PlaySceneCode.idToCallbackMap.set(15224092, gdjs.PlaySceneCode.asyncCallback15224092);
gdjs.PlaySceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PlaySceneCode.localVariables);
for (const obj of gdjs.PlaySceneCode.GDDialogue_9595TextObjects1) asyncObjectsList.addObject("Dialogue_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.PlaySceneCode.asyncCallback15224092(runtimeScene, asyncObjectsList)), 15224092, asyncObjectsList);
}
}

}


};gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDMotionTrailObjects3Objects = Hashtable.newFrom({"MotionTrail": gdjs.PlaySceneCode.GDMotionTrailObjects3});
gdjs.PlaySceneCode.mapOfEmptyGDTopButtonObjects = Hashtable.newFrom({"TopButton": []});
gdjs.PlaySceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.PlaySceneCode.GDMotionTrailObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDMotionTrailObjects3Objects, 0, 0, "");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MotionTrail"), gdjs.PlaySceneCode.GDMotionTrailObjects3);
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects3);
{for(var i = 0, len = gdjs.PlaySceneCode.GDMotionTrailObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDMotionTrailObjects3[i].setPosition((( gdjs.PlaySceneCode.GDStarship_95951Objects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects3[0].getPointX("MotionTrail")),(( gdjs.PlaySceneCode.GDStarship_95951Objects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects3[0].getPointY("MotionTrail")));
}
}
}

}


{

gdjs.PlaySceneCode.GDTopButtonObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.PlaySceneCode.GDTopButtonObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.PlaySceneCode.GDTopButtonObjects4);
for (var i = 0, k = 0, l = gdjs.PlaySceneCode.GDTopButtonObjects4.length;i<l;++i) {
    if ( gdjs.PlaySceneCode.GDTopButtonObjects4[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.PlaySceneCode.GDTopButtonObjects4[k] = gdjs.PlaySceneCode.GDTopButtonObjects4[i];
        ++k;
    }
}
gdjs.PlaySceneCode.GDTopButtonObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PlaySceneCode.GDTopButtonObjects4.length; j < jLen ; ++j) {
        if ( gdjs.PlaySceneCode.GDTopButtonObjects3_1final.indexOf(gdjs.PlaySceneCode.GDTopButtonObjects4[j]) === -1 )
            gdjs.PlaySceneCode.GDTopButtonObjects3_1final.push(gdjs.PlaySceneCode.GDTopButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PlaySceneCode.GDTopButtonObjects3_1final, gdjs.PlaySceneCode.GDTopButtonObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15227884);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MotionTrail"), gdjs.PlaySceneCode.GDMotionTrailObjects3);
{for(var i = 0, len = gdjs.PlaySceneCode.GDMotionTrailObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDMotionTrailObjects3[i].startEmission();
}
}
}

}


{

gdjs.PlaySceneCode.GDTopButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.PlaySceneCode.GDTopButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.PlaySceneCode.GDTopButtonObjects3);
for (var i = 0, k = 0, l = gdjs.PlaySceneCode.GDTopButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.PlaySceneCode.GDTopButtonObjects3[i].getBehavior("MultitouchButton").IsPressed(null)) ) {
        isConditionTrue_1 = true;
        gdjs.PlaySceneCode.GDTopButtonObjects3[k] = gdjs.PlaySceneCode.GDTopButtonObjects3[i];
        ++k;
    }
}
gdjs.PlaySceneCode.GDTopButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PlaySceneCode.GDTopButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PlaySceneCode.GDTopButtonObjects2_1final.indexOf(gdjs.PlaySceneCode.GDTopButtonObjects3[j]) === -1 )
            gdjs.PlaySceneCode.GDTopButtonObjects2_1final.push(gdjs.PlaySceneCode.GDTopButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.PlaySceneCode.mapOfEmptyGDTopButtonObjects) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.PlaySceneCode.GDTopButtonObjects2_1final, gdjs.PlaySceneCode.GDTopButtonObjects2);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MotionTrail"), gdjs.PlaySceneCode.GDMotionTrailObjects2);
{for(var i = 0, len = gdjs.PlaySceneCode.GDMotionTrailObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDMotionTrailObjects2[i].stopEmission();
}
}
}

}


};gdjs.PlaySceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.PlaySceneCode.GDTopButtonObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.PlaySceneCode.GDTopButtonObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.PlaySceneCode.GDTopButtonObjects4);
for (var i = 0, k = 0, l = gdjs.PlaySceneCode.GDTopButtonObjects4.length;i<l;++i) {
    if ( gdjs.PlaySceneCode.GDTopButtonObjects4[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.PlaySceneCode.GDTopButtonObjects4[k] = gdjs.PlaySceneCode.GDTopButtonObjects4[i];
        ++k;
    }
}
gdjs.PlaySceneCode.GDTopButtonObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PlaySceneCode.GDTopButtonObjects4.length; j < jLen ; ++j) {
        if ( gdjs.PlaySceneCode.GDTopButtonObjects3_1final.indexOf(gdjs.PlaySceneCode.GDTopButtonObjects4[j]) === -1 )
            gdjs.PlaySceneCode.GDTopButtonObjects3_1final.push(gdjs.PlaySceneCode.GDTopButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PlaySceneCode.GDTopButtonObjects3_1final, gdjs.PlaySceneCode.GDTopButtonObjects3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects3);
{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects3[i].getBehavior("Physics2").applyPolarForce((gdjs.PlaySceneCode.GDStarship_95951Objects3[i].getAngle()), 4.5, (gdjs.PlaySceneCode.GDStarship_95951Objects3[i].getPointX("")), (gdjs.PlaySceneCode.GDStarship_95951Objects3[i].getPointY("")));
}
}
}

}


{

gdjs.PlaySceneCode.GDLeftButtonObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.PlaySceneCode.GDLeftButtonObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.PlaySceneCode.GDLeftButtonObjects4);
for (var i = 0, k = 0, l = gdjs.PlaySceneCode.GDLeftButtonObjects4.length;i<l;++i) {
    if ( gdjs.PlaySceneCode.GDLeftButtonObjects4[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.PlaySceneCode.GDLeftButtonObjects4[k] = gdjs.PlaySceneCode.GDLeftButtonObjects4[i];
        ++k;
    }
}
gdjs.PlaySceneCode.GDLeftButtonObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PlaySceneCode.GDLeftButtonObjects4.length; j < jLen ; ++j) {
        if ( gdjs.PlaySceneCode.GDLeftButtonObjects3_1final.indexOf(gdjs.PlaySceneCode.GDLeftButtonObjects4[j]) === -1 )
            gdjs.PlaySceneCode.GDLeftButtonObjects3_1final.push(gdjs.PlaySceneCode.GDLeftButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PlaySceneCode.GDLeftButtonObjects3_1final, gdjs.PlaySceneCode.GDLeftButtonObjects3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects3);
{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects3[i].getBehavior("Physics2").applyTorque(-(0.5));
}
}
}

}


{

gdjs.PlaySceneCode.GDRightButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.PlaySceneCode.GDRightButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.PlaySceneCode.GDRightButtonObjects3);
for (var i = 0, k = 0, l = gdjs.PlaySceneCode.GDRightButtonObjects3.length;i<l;++i) {
    if ( gdjs.PlaySceneCode.GDRightButtonObjects3[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.PlaySceneCode.GDRightButtonObjects3[k] = gdjs.PlaySceneCode.GDRightButtonObjects3[i];
        ++k;
    }
}
gdjs.PlaySceneCode.GDRightButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PlaySceneCode.GDRightButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PlaySceneCode.GDRightButtonObjects2_1final.indexOf(gdjs.PlaySceneCode.GDRightButtonObjects3[j]) === -1 )
            gdjs.PlaySceneCode.GDRightButtonObjects2_1final.push(gdjs.PlaySceneCode.GDRightButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PlaySceneCode.GDRightButtonObjects2_1final, gdjs.PlaySceneCode.GDRightButtonObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects2);
{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getBehavior("Physics2").applyTorque(0.5);
}
}
}

}


};gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.PlaySceneCode.GDBulletObjects2});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBulletFlashObjects2Objects = Hashtable.newFrom({"BulletFlash": gdjs.PlaySceneCode.GDBulletFlashObjects2});
gdjs.PlaySceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects2);
gdjs.PlaySceneCode.GDFireButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlaySceneCode.GDStarship_95951Objects2.length;i<l;++i) {
    if ( gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getBehavior("FireBullet").IsReadyToShoot(null) ) {
        isConditionTrue_0 = true;
        gdjs.PlaySceneCode.GDStarship_95951Objects2[k] = gdjs.PlaySceneCode.GDStarship_95951Objects2[i];
        ++k;
    }
}
gdjs.PlaySceneCode.GDStarship_95951Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.PlaySceneCode.GDFireButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("FireButton"), gdjs.PlaySceneCode.GDFireButtonObjects3);
for (var i = 0, k = 0, l = gdjs.PlaySceneCode.GDFireButtonObjects3.length;i<l;++i) {
    if ( gdjs.PlaySceneCode.GDFireButtonObjects3[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.PlaySceneCode.GDFireButtonObjects3[k] = gdjs.PlaySceneCode.GDFireButtonObjects3[i];
        ++k;
    }
}
gdjs.PlaySceneCode.GDFireButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PlaySceneCode.GDFireButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PlaySceneCode.GDFireButtonObjects2_1final.indexOf(gdjs.PlaySceneCode.GDFireButtonObjects3[j]) === -1 )
            gdjs.PlaySceneCode.GDFireButtonObjects2_1final.push(gdjs.PlaySceneCode.GDFireButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PlaySceneCode.GDFireButtonObjects2_1final, gdjs.PlaySceneCode.GDFireButtonObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlaySceneCode.GDStarship_95951Objects2 */
gdjs.PlaySceneCode.GDBulletObjects2.length = 0;

gdjs.PlaySceneCode.GDBulletFlashObjects2.length = 0;

{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getBehavior("FireBullet").Fire((gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getPointX("BulletSpawn")), (gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getPointY("BulletSpawn")), gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBulletObjects2Objects, (gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getAngle()), 175, null);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBulletObjects2[i].setZOrder((( gdjs.PlaySceneCode.GDStarship_95951Objects2.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects2[0].getZOrder()) - 2);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "LaserFire.wav", false, 40, gdjs.randomFloatInRange(0.9, 1.1));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBulletFlashObjects2Objects, (( gdjs.PlaySceneCode.GDStarship_95951Objects2.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects2[0].getPointX("BulletFlash")), (( gdjs.PlaySceneCode.GDStarship_95951Objects2.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects2[0].getPointY("BulletFlash")), "");
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBulletFlashObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBulletFlashObjects2[i].setAngle((( gdjs.PlaySceneCode.GDStarship_95951Objects2.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects2[0].getAngle()) + 90);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBulletFlashObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBulletFlashObjects2[i].setZOrder((( gdjs.PlaySceneCode.GDStarship_95951Objects2.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects2[0].getZOrder()) - 1);
}
}
}

}


};gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects3Objects = Hashtable.newFrom({"Bugger": gdjs.PlaySceneCode.GDBuggerObjects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects3Objects = Hashtable.newFrom({"Starship_1": gdjs.PlaySceneCode.GDStarship_95951Objects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDNewSpriteObjects3Objects = Hashtable.newFrom({"NewSprite": gdjs.PlaySceneCode.GDNewSpriteObjects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects3Objects = Hashtable.newFrom({"Bugger": gdjs.PlaySceneCode.GDBuggerObjects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects3Objects = Hashtable.newFrom({"Starship_1": gdjs.PlaySceneCode.GDStarship_95951Objects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects3Objects = Hashtable.newFrom({"Bugger": gdjs.PlaySceneCode.GDBuggerObjects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects3Objects = Hashtable.newFrom({"Starship_1": gdjs.PlaySceneCode.GDStarship_95951Objects3});
gdjs.PlaySceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bugger"), gdjs.PlaySceneCode.GDBuggerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects3);
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects3[i].rotateTowardObject((gdjs.PlaySceneCode.GDStarship_95951Objects3.length !== 0 ? gdjs.PlaySceneCode.GDStarship_95951Objects3[0] : null), 180, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bugger"), gdjs.PlaySceneCode.GDBuggerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects3Objects, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects3Objects, 500, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlaySceneCode.GDBuggerObjects3.length;i<l;++i) {
    if ( gdjs.PlaySceneCode.GDBuggerObjects3[i].getTimerElapsedTimeInSecondsOrNaN("Reload Time") > 2 ) {
        isConditionTrue_0 = true;
        gdjs.PlaySceneCode.GDBuggerObjects3[k] = gdjs.PlaySceneCode.GDBuggerObjects3[i];
        ++k;
    }
}
gdjs.PlaySceneCode.GDBuggerObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlaySceneCode.GDBuggerObjects3 */
gdjs.PlaySceneCode.GDNewSpriteObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDNewSpriteObjects3Objects, (( gdjs.PlaySceneCode.GDBuggerObjects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDBuggerObjects3[0].getPointX("Nose")), (( gdjs.PlaySceneCode.GDBuggerObjects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDBuggerObjects3[0].getPointY("Nose")), "");
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDNewSpriteObjects3[i].setAngle((( gdjs.PlaySceneCode.GDBuggerObjects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDBuggerObjects3[0].getAngle()));
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDNewSpriteObjects3[i].getBehavior("Physics2").applyPolarForce((gdjs.PlaySceneCode.GDNewSpriteObjects3[i].getAngle()), 100, (gdjs.PlaySceneCode.GDNewSpriteObjects3[i].getPointX("")), (gdjs.PlaySceneCode.GDNewSpriteObjects3[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects3[i].resetTimer("Reload Time");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bugger"), gdjs.PlaySceneCode.GDBuggerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects3Objects, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects3Objects, 250, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PlaySceneCode.GDBuggerObjects3 */
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects3[i].getBehavior("Physics2").applyPolarForce((gdjs.PlaySceneCode.GDBuggerObjects3[i].getAngle()) + 180, 4, (gdjs.PlaySceneCode.GDBuggerObjects3[i].getBehavior("Physics2").getMassCenterX()), (gdjs.PlaySceneCode.GDBuggerObjects3[i].getBehavior("Physics2").getMassCenterY()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bugger"), gdjs.PlaySceneCode.GDBuggerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects3Objects, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects3Objects, 350, true);
if (isConditionTrue_0) {
/* Reuse gdjs.PlaySceneCode.GDBuggerObjects3 */
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects3[i].getBehavior("Physics2").applyPolarForce((gdjs.PlaySceneCode.GDBuggerObjects3[i].getAngle()), 5, (gdjs.PlaySceneCode.GDBuggerObjects3[i].getBehavior("Physics2").getMassCenterX()), (gdjs.PlaySceneCode.GDBuggerObjects3[i].getBehavior("Physics2").getMassCenterY()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bugger"), gdjs.PlaySceneCode.GDBuggerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects2);
{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getBehavior("Physics2").setGravity(0, 0);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects2[i].getBehavior("Physics2").setGravity(0, 0);
}
}
}

}


};gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBulletObjects3Objects = Hashtable.newFrom({"Bullet": gdjs.PlaySceneCode.GDBulletObjects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects3Objects = Hashtable.newFrom({"Bugger": gdjs.PlaySceneCode.GDBuggerObjects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDebrisHugeObjects3Objects = Hashtable.newFrom({"DebrisHuge": gdjs.PlaySceneCode.GDDebrisHugeObjects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBulletHitObjects3Objects = Hashtable.newFrom({"BulletHit": gdjs.PlaySceneCode.GDBulletHitObjects3});
gdjs.PlaySceneCode.eventsList7 = function(runtimeScene) {

};gdjs.PlaySceneCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bugger"), gdjs.PlaySceneCode.GDBuggerObjects2);

for (gdjs.PlaySceneCode.forEachIndex3 = 0;gdjs.PlaySceneCode.forEachIndex3 < gdjs.PlaySceneCode.GDBuggerObjects2.length;++gdjs.PlaySceneCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.PlaySceneCode.GDBulletObjects3);
gdjs.PlaySceneCode.GDBulletHitObjects3.length = 0;

gdjs.PlaySceneCode.GDDebrisHugeObjects3.length = 0;

gdjs.PlaySceneCode.GDBuggerObjects3.length = 0;


gdjs.PlaySceneCode.forEachTemporary3 = gdjs.PlaySceneCode.GDBuggerObjects2[gdjs.PlaySceneCode.forEachIndex3];
gdjs.PlaySceneCode.GDBuggerObjects3.push(gdjs.PlaySceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBulletObjects3Objects, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion.wav", false, 60, gdjs.randomFloatInRange(0.9, 1));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDebrisHugeObjects3Objects, (( gdjs.PlaySceneCode.GDBuggerObjects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDBuggerObjects3[0].getPointX("")), (( gdjs.PlaySceneCode.GDBuggerObjects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDBuggerObjects3[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBulletHitObjects3Objects, (( gdjs.PlaySceneCode.GDBulletObjects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDBulletObjects3[0].getPointX("BulletHit")), (( gdjs.PlaySceneCode.GDBulletObjects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDBulletObjects3[0].getPointY("BulletHit")), "");
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBuggerObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBuggerObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDBulletObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDBulletObjects3[i].deleteFromScene(runtimeScene);
}
}
}
}

}


};gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects2Objects = Hashtable.newFrom({"Starship_1": gdjs.PlaySceneCode.GDStarship_95951Objects2});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects2Objects = Hashtable.newFrom({"Bugger": gdjs.PlaySceneCode.GDBuggerObjects2});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects2Objects = Hashtable.newFrom({"Starship_1": gdjs.PlaySceneCode.GDStarship_95951Objects2});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.PlaySceneCode.GDNewSpriteObjects2});
gdjs.PlaySceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__CameraShake__SetLayerTranslationAmplitude.func(runtimeScene, 1, 1, "", null);
}
{gdjs.evtsExt__CameraShake__SetLayerRotationAmplitude.func(runtimeScene, 1, "", null);
}
{gdjs.evtsExt__CameraShake__SetLayerZoomAmplitude.func(runtimeScene, 1.01, "", null);
}
{gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency.func(runtimeScene, 10, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bugger"), gdjs.PlaySceneCode.GDBuggerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects2Objects, "Physics2", gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDBuggerObjects2Objects, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LifeBar"), gdjs.PlaySceneCode.GDLifeBarObjects2);
/* Reuse gdjs.PlaySceneCode.GDStarship_95951Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Bump.wav", false, 60, gdjs.randomFloatInRange(0.9, 1.1));
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 1, 0, 0, null);
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getBehavior("Flash").Flash(1.5, null);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDLifeBarObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDLifeBarObjects2[i].getBehavior("Flash").Flash(1.5, null);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDLifeBarObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDLifeBarObjects2[i].SetValue((( gdjs.PlaySceneCode.GDStarship_95951Objects2.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects2[0].getBehavior("Health").Health(null)), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.PlaySceneCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDStarship_959595951Objects2Objects, "Physics2", gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDNewSpriteObjects2Objects, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LifeBar"), gdjs.PlaySceneCode.GDLifeBarObjects2);
/* Reuse gdjs.PlaySceneCode.GDNewSpriteObjects2 */
/* Reuse gdjs.PlaySceneCode.GDStarship_95951Objects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Bump.wav", false, 60, gdjs.randomFloatInRange(0.9, 1.1));
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 1, 0, 0, null);
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getBehavior("Flash").Flash(1.5, null);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDLifeBarObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDLifeBarObjects2[i].getBehavior("Flash").Flash(1.5, null);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects2[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDLifeBarObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDLifeBarObjects2[i].SetValue((( gdjs.PlaySceneCode.GDStarship_95951Objects2.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects2[0].getBehavior("Health").Health(null)), null);
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDNewSpriteObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlaySceneCode.GDStarship_95951Objects1.length;i<l;++i) {
    if ( gdjs.PlaySceneCode.GDStarship_95951Objects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.PlaySceneCode.GDStarship_95951Objects1[k] = gdjs.PlaySceneCode.GDStarship_95951Objects1[i];
        ++k;
    }
}
gdjs.PlaySceneCode.GDStarship_95951Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MotionTrail"), gdjs.PlaySceneCode.GDMotionTrailObjects1);
{for(var i = 0, len = gdjs.PlaySceneCode.GDMotionTrailObjects1.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDMotionTrailObjects1[i].stopEmission();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("GameOverAnimation");
}
}

}


};gdjs.PlaySceneCode.eventsList10 = function(runtimeScene) {

{


gdjs.PlaySceneCode.eventsList3(runtimeScene);
}


{


gdjs.PlaySceneCode.eventsList4(runtimeScene);
}


{


gdjs.PlaySceneCode.eventsList5(runtimeScene);
}


{


gdjs.PlaySceneCode.eventsList6(runtimeScene);
}


{


gdjs.PlaySceneCode.eventsList8(runtimeScene);
}


{


gdjs.PlaySceneCode.eventsList9(runtimeScene);
}


};gdjs.PlaySceneCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "GamePlaying");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlaySceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDeathShipParticleObjects3Objects = Hashtable.newFrom({"DeathShipParticle": gdjs.PlaySceneCode.GDDeathShipParticleObjects3});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDeathDebrisParticleObjects3Objects = Hashtable.newFrom({"DeathDebrisParticle": gdjs.PlaySceneCode.GDDeathDebrisParticleObjects3});
gdjs.PlaySceneCode.asyncCallback15256428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PlaySceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ContinueText"), gdjs.PlaySceneCode.GDContinueTextObjects3);

{for(var i = 0, len = gdjs.PlaySceneCode.GDContinueTextObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDContinueTextObjects3[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("GameOverWaitKey");
}
gdjs.PlaySceneCode.localVariables.length = 0;
}
gdjs.PlaySceneCode.idToCallbackMap.set(15256428, gdjs.PlaySceneCode.asyncCallback15256428);
gdjs.PlaySceneCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PlaySceneCode.localVariables);
for (const obj of gdjs.PlaySceneCode.GDContinueTextObjects2) asyncObjectsList.addObject("ContinueText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PlaySceneCode.asyncCallback15256428(runtimeScene, asyncObjectsList)), 15256428, asyncObjectsList);
}
}

}


};gdjs.PlaySceneCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15253660);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "GameOver", 0, 0, 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15253580);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Starship_1"), gdjs.PlaySceneCode.GDStarship_95951Objects3);
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects3.length = 0;

gdjs.PlaySceneCode.GDDeathShipParticleObjects3.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Death.wav", false, 50, 1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDeathShipParticleObjects3Objects, (( gdjs.PlaySceneCode.GDStarship_95951Objects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects3[0].getPointX("")), (( gdjs.PlaySceneCode.GDStarship_95951Objects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects3[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDeathDebrisParticleObjects3Objects, (( gdjs.PlaySceneCode.GDStarship_95951Objects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects3[0].getPointX("")), (( gdjs.PlaySceneCode.GDStarship_95951Objects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects3[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDDeathShipParticleObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDDeathShipParticleObjects3[i].setAngle((( gdjs.PlaySceneCode.GDStarship_95951Objects3.length === 0 ) ? 0 :gdjs.PlaySceneCode.GDStarship_95951Objects3[0].getAngle()));
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDStarship_95951Objects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDStarship_95951Objects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15256092);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueText"), gdjs.PlaySceneCode.GDContinueTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.PlaySceneCode.GDTutorialTextObjects2);
{for(var i = 0, len = gdjs.PlaySceneCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDTutorialTextObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDContinueTextObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDContinueTextObjects2[i].hide();
}
}

{ //Subevents
gdjs.PlaySceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.PlaySceneCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayScene", false);
}
}

}


};gdjs.PlaySceneCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "GameOverAnimation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlaySceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "GameOverWaitKey");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlaySceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.PlaySceneCode.eventsList16 = function(runtimeScene) {

};gdjs.PlaySceneCode.mapOfEmptyGDBuggerObjects = Hashtable.newFrom({"Bugger": []});
gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDialogue_95959595TextObjects1Objects = Hashtable.newFrom({"Dialogue_Text": gdjs.PlaySceneCode.GDDialogue_9595TextObjects1});
gdjs.PlaySceneCode.asyncCallback15260820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PlaySceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dialogue_Text"), gdjs.PlaySceneCode.GDDialogue_9595TextObjects3);

{for(var i = 0, len = gdjs.PlaySceneCode.GDDialogue_9595TextObjects3.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDDialogue_9595TextObjects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("GameOverAnimation");
}
gdjs.PlaySceneCode.localVariables.length = 0;
}
gdjs.PlaySceneCode.idToCallbackMap.set(15260820, gdjs.PlaySceneCode.asyncCallback15260820);
gdjs.PlaySceneCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.PlaySceneCode.localVariables);
for (const obj of gdjs.PlaySceneCode.GDDialogue_9595TextObjects2) asyncObjectsList.addObject("Dialogue_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.PlaySceneCode.asyncCallback15260820(runtimeScene, asyncObjectsList)), 15260820, asyncObjectsList);
}
}

}


};gdjs.PlaySceneCode.asyncCallback15260604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PlaySceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dialogue_Text"), gdjs.PlaySceneCode.GDDialogue_9595TextObjects2);

{for(var i = 0, len = gdjs.PlaySceneCode.GDDialogue_9595TextObjects2.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDDialogue_9595TextObjects2[i].getBehavior("Text").setText("Orson Scott Card writes with a very plain and 'getting to the point' type of writing." + gdjs.evtTools.string.newLine() + " He doesn't care for descriptive writing similar to how his own characters" + gdjs.evtTools.string.newLine() + " in the story are prioritizing saving the human race in the most efficient way possible.");
}
}

{ //Subevents
gdjs.PlaySceneCode.eventsList17(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.PlaySceneCode.localVariables.length = 0;
}
gdjs.PlaySceneCode.idToCallbackMap.set(15260604, gdjs.PlaySceneCode.asyncCallback15260604);
gdjs.PlaySceneCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PlaySceneCode.localVariables);
for (const obj of gdjs.PlaySceneCode.GDDialogue_9595TextObjects1) asyncObjectsList.addObject("Dialogue_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.PlaySceneCode.asyncCallback15260604(runtimeScene, asyncObjectsList)), 15260604, asyncObjectsList);
}
}

}


};gdjs.PlaySceneCode.eventsList19 = function(runtimeScene) {

{


gdjs.PlaySceneCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Intro");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15223020);
}
}
if (isConditionTrue_0) {
gdjs.PlaySceneCode.GDDialogue_9595TextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDialogue_95959595TextObjects1Objects, 100, 300, "UI");
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDDialogue_9595TextObjects1.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDDialogue_9595TextObjects1[i].getBehavior("Text").setText("Graff: You have to be a killer, Ender. (Card, 12) The only thing between human survival and" + gdjs.evtTools.string.newLine() + " destruction is you. If you don't grow up and start doing these simulations," + gdjs.evtTools.string.newLine() + " none of us will be alive to tell the tale.");
}
}

{ //Subevents
gdjs.PlaySceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.PlaySceneCode.eventsList11(runtimeScene);
}


{


gdjs.PlaySceneCode.eventsList15(runtimeScene);
}


{


gdjs.PlaySceneCode.eventsList16(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.PlaySceneCode.mapOfEmptyGDBuggerObjects) < 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "GamePlaying");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Victory");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Victory");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15259980);
}
}
if (isConditionTrue_0) {
gdjs.PlaySceneCode.GDDialogue_9595TextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.PlaySceneCode.mapOfGDgdjs_9546PlaySceneCode_9546GDDialogue_95959595TextObjects1Objects, 100, 300, "UI");
}
{for(var i = 0, len = gdjs.PlaySceneCode.GDDialogue_9595TextObjects1.length ;i < len;++i) {
    gdjs.PlaySceneCode.GDDialogue_9595TextObjects1[i].getBehavior("Text").setText("Ender: I didn't want to win this way. (Card, 14) I didn't know." + gdjs.evtTools.string.newLine() + "How could've I known that they tricked me into genocide?");
}
}

{ //Subevents
gdjs.PlaySceneCode.eventsList18(runtimeScene);} //End of subevents
}

}


};

gdjs.PlaySceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlaySceneCode.GDStarship_95951Objects1.length = 0;
gdjs.PlaySceneCode.GDStarship_95951Objects2.length = 0;
gdjs.PlaySceneCode.GDStarship_95951Objects3.length = 0;
gdjs.PlaySceneCode.GDStarship_95951Objects4.length = 0;
gdjs.PlaySceneCode.GDBulletObjects1.length = 0;
gdjs.PlaySceneCode.GDBulletObjects2.length = 0;
gdjs.PlaySceneCode.GDBulletObjects3.length = 0;
gdjs.PlaySceneCode.GDBulletObjects4.length = 0;
gdjs.PlaySceneCode.GDLifeBarObjects1.length = 0;
gdjs.PlaySceneCode.GDLifeBarObjects2.length = 0;
gdjs.PlaySceneCode.GDLifeBarObjects3.length = 0;
gdjs.PlaySceneCode.GDLifeBarObjects4.length = 0;
gdjs.PlaySceneCode.GDGameOverObjects1.length = 0;
gdjs.PlaySceneCode.GDGameOverObjects2.length = 0;
gdjs.PlaySceneCode.GDGameOverObjects3.length = 0;
gdjs.PlaySceneCode.GDGameOverObjects4.length = 0;
gdjs.PlaySceneCode.GDDeathShipParticleObjects1.length = 0;
gdjs.PlaySceneCode.GDDeathShipParticleObjects2.length = 0;
gdjs.PlaySceneCode.GDDeathShipParticleObjects3.length = 0;
gdjs.PlaySceneCode.GDDeathShipParticleObjects4.length = 0;
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects1.length = 0;
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects2.length = 0;
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects3.length = 0;
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects4.length = 0;
gdjs.PlaySceneCode.GDDebrisHugeObjects1.length = 0;
gdjs.PlaySceneCode.GDDebrisHugeObjects2.length = 0;
gdjs.PlaySceneCode.GDDebrisHugeObjects3.length = 0;
gdjs.PlaySceneCode.GDDebrisHugeObjects4.length = 0;
gdjs.PlaySceneCode.GDDebrisMediumObjects1.length = 0;
gdjs.PlaySceneCode.GDDebrisMediumObjects2.length = 0;
gdjs.PlaySceneCode.GDDebrisMediumObjects3.length = 0;
gdjs.PlaySceneCode.GDDebrisMediumObjects4.length = 0;
gdjs.PlaySceneCode.GDDebrisSmallObjects1.length = 0;
gdjs.PlaySceneCode.GDDebrisSmallObjects2.length = 0;
gdjs.PlaySceneCode.GDDebrisSmallObjects3.length = 0;
gdjs.PlaySceneCode.GDDebrisSmallObjects4.length = 0;
gdjs.PlaySceneCode.GDBulletHitObjects1.length = 0;
gdjs.PlaySceneCode.GDBulletHitObjects2.length = 0;
gdjs.PlaySceneCode.GDBulletHitObjects3.length = 0;
gdjs.PlaySceneCode.GDBulletHitObjects4.length = 0;
gdjs.PlaySceneCode.GDBulletFlashObjects1.length = 0;
gdjs.PlaySceneCode.GDBulletFlashObjects2.length = 0;
gdjs.PlaySceneCode.GDBulletFlashObjects3.length = 0;
gdjs.PlaySceneCode.GDBulletFlashObjects4.length = 0;
gdjs.PlaySceneCode.GDStarBackgroundObjects1.length = 0;
gdjs.PlaySceneCode.GDStarBackgroundObjects2.length = 0;
gdjs.PlaySceneCode.GDStarBackgroundObjects3.length = 0;
gdjs.PlaySceneCode.GDStarBackgroundObjects4.length = 0;
gdjs.PlaySceneCode.GDMotionTrailObjects1.length = 0;
gdjs.PlaySceneCode.GDMotionTrailObjects2.length = 0;
gdjs.PlaySceneCode.GDMotionTrailObjects3.length = 0;
gdjs.PlaySceneCode.GDMotionTrailObjects4.length = 0;
gdjs.PlaySceneCode.GDTutorialTextObjects1.length = 0;
gdjs.PlaySceneCode.GDTutorialTextObjects2.length = 0;
gdjs.PlaySceneCode.GDTutorialTextObjects3.length = 0;
gdjs.PlaySceneCode.GDTutorialTextObjects4.length = 0;
gdjs.PlaySceneCode.GDContinueTextObjects1.length = 0;
gdjs.PlaySceneCode.GDContinueTextObjects2.length = 0;
gdjs.PlaySceneCode.GDContinueTextObjects3.length = 0;
gdjs.PlaySceneCode.GDContinueTextObjects4.length = 0;
gdjs.PlaySceneCode.GDRightButtonObjects1.length = 0;
gdjs.PlaySceneCode.GDRightButtonObjects2.length = 0;
gdjs.PlaySceneCode.GDRightButtonObjects3.length = 0;
gdjs.PlaySceneCode.GDRightButtonObjects4.length = 0;
gdjs.PlaySceneCode.GDLeftButtonObjects1.length = 0;
gdjs.PlaySceneCode.GDLeftButtonObjects2.length = 0;
gdjs.PlaySceneCode.GDLeftButtonObjects3.length = 0;
gdjs.PlaySceneCode.GDLeftButtonObjects4.length = 0;
gdjs.PlaySceneCode.GDTopButtonObjects1.length = 0;
gdjs.PlaySceneCode.GDTopButtonObjects2.length = 0;
gdjs.PlaySceneCode.GDTopButtonObjects3.length = 0;
gdjs.PlaySceneCode.GDTopButtonObjects4.length = 0;
gdjs.PlaySceneCode.GDFireButtonObjects1.length = 0;
gdjs.PlaySceneCode.GDFireButtonObjects2.length = 0;
gdjs.PlaySceneCode.GDFireButtonObjects3.length = 0;
gdjs.PlaySceneCode.GDFireButtonObjects4.length = 0;
gdjs.PlaySceneCode.GDBuggerObjects1.length = 0;
gdjs.PlaySceneCode.GDBuggerObjects2.length = 0;
gdjs.PlaySceneCode.GDBuggerObjects3.length = 0;
gdjs.PlaySceneCode.GDBuggerObjects4.length = 0;
gdjs.PlaySceneCode.GDNewSpriteObjects1.length = 0;
gdjs.PlaySceneCode.GDNewSpriteObjects2.length = 0;
gdjs.PlaySceneCode.GDNewSpriteObjects3.length = 0;
gdjs.PlaySceneCode.GDNewSpriteObjects4.length = 0;
gdjs.PlaySceneCode.GDDialogue_9595TextObjects1.length = 0;
gdjs.PlaySceneCode.GDDialogue_9595TextObjects2.length = 0;
gdjs.PlaySceneCode.GDDialogue_9595TextObjects3.length = 0;
gdjs.PlaySceneCode.GDDialogue_9595TextObjects4.length = 0;

gdjs.PlaySceneCode.eventsList19(runtimeScene);
gdjs.PlaySceneCode.GDStarship_95951Objects1.length = 0;
gdjs.PlaySceneCode.GDStarship_95951Objects2.length = 0;
gdjs.PlaySceneCode.GDStarship_95951Objects3.length = 0;
gdjs.PlaySceneCode.GDStarship_95951Objects4.length = 0;
gdjs.PlaySceneCode.GDBulletObjects1.length = 0;
gdjs.PlaySceneCode.GDBulletObjects2.length = 0;
gdjs.PlaySceneCode.GDBulletObjects3.length = 0;
gdjs.PlaySceneCode.GDBulletObjects4.length = 0;
gdjs.PlaySceneCode.GDLifeBarObjects1.length = 0;
gdjs.PlaySceneCode.GDLifeBarObjects2.length = 0;
gdjs.PlaySceneCode.GDLifeBarObjects3.length = 0;
gdjs.PlaySceneCode.GDLifeBarObjects4.length = 0;
gdjs.PlaySceneCode.GDGameOverObjects1.length = 0;
gdjs.PlaySceneCode.GDGameOverObjects2.length = 0;
gdjs.PlaySceneCode.GDGameOverObjects3.length = 0;
gdjs.PlaySceneCode.GDGameOverObjects4.length = 0;
gdjs.PlaySceneCode.GDDeathShipParticleObjects1.length = 0;
gdjs.PlaySceneCode.GDDeathShipParticleObjects2.length = 0;
gdjs.PlaySceneCode.GDDeathShipParticleObjects3.length = 0;
gdjs.PlaySceneCode.GDDeathShipParticleObjects4.length = 0;
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects1.length = 0;
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects2.length = 0;
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects3.length = 0;
gdjs.PlaySceneCode.GDDeathDebrisParticleObjects4.length = 0;
gdjs.PlaySceneCode.GDDebrisHugeObjects1.length = 0;
gdjs.PlaySceneCode.GDDebrisHugeObjects2.length = 0;
gdjs.PlaySceneCode.GDDebrisHugeObjects3.length = 0;
gdjs.PlaySceneCode.GDDebrisHugeObjects4.length = 0;
gdjs.PlaySceneCode.GDDebrisMediumObjects1.length = 0;
gdjs.PlaySceneCode.GDDebrisMediumObjects2.length = 0;
gdjs.PlaySceneCode.GDDebrisMediumObjects3.length = 0;
gdjs.PlaySceneCode.GDDebrisMediumObjects4.length = 0;
gdjs.PlaySceneCode.GDDebrisSmallObjects1.length = 0;
gdjs.PlaySceneCode.GDDebrisSmallObjects2.length = 0;
gdjs.PlaySceneCode.GDDebrisSmallObjects3.length = 0;
gdjs.PlaySceneCode.GDDebrisSmallObjects4.length = 0;
gdjs.PlaySceneCode.GDBulletHitObjects1.length = 0;
gdjs.PlaySceneCode.GDBulletHitObjects2.length = 0;
gdjs.PlaySceneCode.GDBulletHitObjects3.length = 0;
gdjs.PlaySceneCode.GDBulletHitObjects4.length = 0;
gdjs.PlaySceneCode.GDBulletFlashObjects1.length = 0;
gdjs.PlaySceneCode.GDBulletFlashObjects2.length = 0;
gdjs.PlaySceneCode.GDBulletFlashObjects3.length = 0;
gdjs.PlaySceneCode.GDBulletFlashObjects4.length = 0;
gdjs.PlaySceneCode.GDStarBackgroundObjects1.length = 0;
gdjs.PlaySceneCode.GDStarBackgroundObjects2.length = 0;
gdjs.PlaySceneCode.GDStarBackgroundObjects3.length = 0;
gdjs.PlaySceneCode.GDStarBackgroundObjects4.length = 0;
gdjs.PlaySceneCode.GDMotionTrailObjects1.length = 0;
gdjs.PlaySceneCode.GDMotionTrailObjects2.length = 0;
gdjs.PlaySceneCode.GDMotionTrailObjects3.length = 0;
gdjs.PlaySceneCode.GDMotionTrailObjects4.length = 0;
gdjs.PlaySceneCode.GDTutorialTextObjects1.length = 0;
gdjs.PlaySceneCode.GDTutorialTextObjects2.length = 0;
gdjs.PlaySceneCode.GDTutorialTextObjects3.length = 0;
gdjs.PlaySceneCode.GDTutorialTextObjects4.length = 0;
gdjs.PlaySceneCode.GDContinueTextObjects1.length = 0;
gdjs.PlaySceneCode.GDContinueTextObjects2.length = 0;
gdjs.PlaySceneCode.GDContinueTextObjects3.length = 0;
gdjs.PlaySceneCode.GDContinueTextObjects4.length = 0;
gdjs.PlaySceneCode.GDRightButtonObjects1.length = 0;
gdjs.PlaySceneCode.GDRightButtonObjects2.length = 0;
gdjs.PlaySceneCode.GDRightButtonObjects3.length = 0;
gdjs.PlaySceneCode.GDRightButtonObjects4.length = 0;
gdjs.PlaySceneCode.GDLeftButtonObjects1.length = 0;
gdjs.PlaySceneCode.GDLeftButtonObjects2.length = 0;
gdjs.PlaySceneCode.GDLeftButtonObjects3.length = 0;
gdjs.PlaySceneCode.GDLeftButtonObjects4.length = 0;
gdjs.PlaySceneCode.GDTopButtonObjects1.length = 0;
gdjs.PlaySceneCode.GDTopButtonObjects2.length = 0;
gdjs.PlaySceneCode.GDTopButtonObjects3.length = 0;
gdjs.PlaySceneCode.GDTopButtonObjects4.length = 0;
gdjs.PlaySceneCode.GDFireButtonObjects1.length = 0;
gdjs.PlaySceneCode.GDFireButtonObjects2.length = 0;
gdjs.PlaySceneCode.GDFireButtonObjects3.length = 0;
gdjs.PlaySceneCode.GDFireButtonObjects4.length = 0;
gdjs.PlaySceneCode.GDBuggerObjects1.length = 0;
gdjs.PlaySceneCode.GDBuggerObjects2.length = 0;
gdjs.PlaySceneCode.GDBuggerObjects3.length = 0;
gdjs.PlaySceneCode.GDBuggerObjects4.length = 0;
gdjs.PlaySceneCode.GDNewSpriteObjects1.length = 0;
gdjs.PlaySceneCode.GDNewSpriteObjects2.length = 0;
gdjs.PlaySceneCode.GDNewSpriteObjects3.length = 0;
gdjs.PlaySceneCode.GDNewSpriteObjects4.length = 0;
gdjs.PlaySceneCode.GDDialogue_9595TextObjects1.length = 0;
gdjs.PlaySceneCode.GDDialogue_9595TextObjects2.length = 0;
gdjs.PlaySceneCode.GDDialogue_9595TextObjects3.length = 0;
gdjs.PlaySceneCode.GDDialogue_9595TextObjects4.length = 0;


return;

}

gdjs['PlaySceneCode'] = gdjs.PlaySceneCode;
