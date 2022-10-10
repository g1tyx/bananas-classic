var version = "1.0";
var savefile_name = "a billion bananas "+version;

var audio_initiated=0;

var player = {};
var monkeys = {};
var elephants = {};
var truck = {};

//values preserved between prestige cycles
var prestige2 = {
  locations:1e9,
  mbm:1,
  autoeat:0,
  autofriend:0,
  autofriend_prestige2:0,
  banana_engine_speed:1,
  banana_engine_speed_label:1,
  rhino:0,
  genie:0
}
var prestige = {
  all_time_poop:0,
  threshold:5e6,
  pps:100,//poop per serving - this applies to both the player and animals and is not being modified in this version
  autopoop:0,//the skill of superheroes!!
  ppm:1,//player poop multiplier
  apm:1,//animals poop multiplier
  driver:0
};
var settings = {
  scientific:0,
  audio_mute:0,
  audio_volume:0.15,
  theme:0
}


//variables that are constants, unsaved defaults or are derived from saved variables
const EUROS_BASE_COST=1e6;
var nextEuroCost=0;
var current_rate;
var misc_settings={
  settings_toggle:0,
  prestige_toggle:0,
  resume:0
};

//counters and helpers
var interval_counters={};
var intervals={};
var autoeat={};
var save_counter=0;

//CACHE

//settings
var settings_block;
var button_settings;
var button_save;
var button_delsave;
var button_scientific;
var button_copysave;
var button_importsave;
var import_save_dump;
var button_audio;
var audio_control_volume;
var footer;
var currentStyle;
var button_theme;

var block_loadgame;
var button_resume;

//indicators
var block_indicator;
var indicator_mbm;
var indicator_manager;

//story block
var all;
var block_ending;
var block_story;
var label_locations;
var label_mbm;
var button_story_mbm_upgrade;
var button_story_autoeat_upgrade;
var button_story_engine_upgrade;
var button_story_autofriend_upgrade;
var button_story_rhino_upgrade;
var button_story_genie_upgrade;
var button_story_empty_upgrade;
var button_story_autofriend_prestige2;

//bananas
var label_bananas;

//player eating
var pb_eat;
var button_eat;
var button_poop;

//poop block
var poop_label;
var label_prestige;
var button_prestige_show;
var prestige_indicators;

//first upgrades block
var block_first_upgrades;
var item_serving_upgrade;
var item_autopoop_upgrade;
var button_serving_upgrade;
var button_autopoop_upgrade;
var label_serving;

//animals block
var block_animals;
var label_monkeys;
var pb_monkeys;
var button_monkeys_upgrade;
var label_elephants;
var pb_elephants;
var button_elephants_upgrade;

//truck block
var block_truck;
var label_truck_capacity;
var pb_truck;
var button_truck_upgrade;
var label_truck_speed;
var button_engine_upgrade;
var button_capacity_upgrade;

//prestige block
var block_prestige;
var button_prestige_animals_upgrade;
var button_prestige_driver_upgrade;
var block_prestige_show;


$(document).ready(function(){

  //CACHE

  //prestige block
  block_prestige_show=$("#block_prestige_show");
  block_prestige=$("#block_prestige");
  button_prestige_animals_upgrade=$("#button_prestige_animals_upgrade");
  button_prestige_driver_upgrade=$("#button_prestige_driver_upgrade");

  //truck block
  button_capacity_upgrade=$("#button_capacity_upgrade");
  button_engine_upgrade=$("#button_engine_upgrade");
  label_truck_speed=$("#label_truck_speed");
  block_truck=$("#block_truck");
  label_truck_capacity=$("#label_truck_capacity");
  pb_truck=$("#pb_truck");
  button_truck_upgrade=$("#button_truck_upgrade");

  //animals block
  label_monkeys=$("#label_monkeys");
  pb_monkeys=$("#pb_monkeys");
  button_monkeys_upgrade=$("#button_monkeys_upgrade");
  label_elephants=$("#label_elephants");
  pb_elephants=$("#pb_elephants");
  button_elephants_upgrade=$("#button_elephants_upgrade");
  block_animals=$("#block_animals");

  //first upgrades block
  block_first_upgrades=$("#block_first_upgrades");
  label_serving=$("#label_serving");
  button_autopoop_upgrade=$("#button_autopoop_upgrade");
  button_serving_upgrade=$("#button_serving_upgrade");
  item_serving_upgrade=$("#item_serving_upgrade");
  item_autopoop_upgrade=$("#item_autopoop_upgrade");

  //poop block
  poop_label=$("#poop_label");
  label_prestige=$("#label_prestige");
  prestige_indicators=$("#prestige_indicators");
  button_prestige_show=$("#button_prestige_show");

  //player eating block
  button_poop=$("#button_poop");
  button_eat=$("#button_eat");
  pb_eat=$("#pb_eat");

  //bananas
  label_bananas=$("#label_bananas");

  //story block
  all=$("#all");
  block_ending=$("#block_ending");
  block_story=$("#block_story");
  label_locations=$("#label_locations");
  label_mbm=$("#label_mbm");
  button_story_mbm_upgrade=$("#button_story_mbm_upgrade");
  button_story_autoeat_upgrade=$("#button_story_autoeat_upgrade");
  button_story_engine_upgrade=$("#button_story_engine_upgrade");
  button_story_autofriend_upgrade=$("#button_story_autofriend_upgrade");
  button_story_rhino_upgrade=$("#button_story_rhino_upgrade");
  button_story_genie_upgrade=$("#button_story_genie_upgrade");
  button_story_empty_upgrade=$("#button_story_empty_upgrade");
  button_story_autofriend_prestige2=$("#button_story_autofriend_prestige2");

  //indicators
  block_indicator=$("#block_indicator");
  indicator_mbm=$("#indicator_mbm");
  indicator_manager=$("#indicator_manager");

  //settings
  import_save_dump=$("#import_save_dump");
  button_importsave=$("#button_importsave");
  button_copysave=$("#button_copysave");
  button_scientific=$("#button_scientific");
  settings_block=$("#settings_block");
  button_settings=$("#button_settings");
  button_save=$("#button_save");
  button_delsave=$("#button_delsave");
  button_audio=$("#button_audio");
  audio_control_volume=$("#audio_control_volume");
  footer=$(".footer");
  currentStyle=$("#currentStyle");
  button_theme=$("#button_theme");

  block_loadgame=$("#block_loadgame");
  button_resume=$("#button_resume");




  document.title = "a billion bananas v"+version;
    console.log("a billion bananas v"+version);
    console.log("created by Louigi Verona");
    console.log("https://louigiverona.com/?page=about");


  //init functions

  if(localStorage.getItem(savefile_name)){
    loadGame();
  }else{
    init();
  }

  commonInit();

  ////////////////

  $("html").keydown(function( event ) {
    switch (event.key){
      case "w":
        //for testing

      break;
      case "s":
        saveGame();
      break;
    }

  });

  //settings
  button_settings.click(function(){
    PlayAudio(1);

    if(misc_settings.settings_toggle==0){
      misc_settings.settings_toggle=1;
    }else{misc_settings.settings_toggle=0;}

    refreshUI();
  });
  button_scientific.click(function(){
    PlayAudio(1);

    if(settings.scientific==0){
      settings.scientific=1;
    }else{settings.scientific=0;}

    refreshUI();
  });
  button_save.click(function(){
    PlayAudio(1);

    button_save.text("Saved").prop("disabled",true);

    saveGame();

    setTimeout(function() { button_save.text("Save Game").prop("disabled",false); }, 1000);

  });
  button_delsave.click(function(){

    PlayAudio(1);

    stopIntervals();
    delSave();

    all.hide();
    block_story.hide();
    block_ending.hide();
    footer.hide();
    block_loadgame.show();

    block_loadgame.html('<p>Save deleted. Reload page.</p>');

  });
  button_copysave.click(function(){
    PlayAudio(1);

    let gameData=localStorage.getItem(savefile_name);
    navigator.clipboard.writeText(gameData);

    button_copysave.text("Copied").prop("disabled",true);

    setTimeout(function() { button_copysave.text("Copy").prop("disabled",false); }, 1000);

  });
  button_importsave.click(function(){

    if(import_save_dump.text().length<=0){return;}


    PlayAudio(1);

    localStorage.setItem(savefile_name, import_save_dump.text());
    import_save_dump.text('');

    misc_settings.settings_toggle=0;

    loadGame();
    refreshUI();

  });
  button_audio.click(function(){

    PlayAudio(1);

    if(settings.audio_mute==0){
      settings.audio_mute=1;
    }else{
      settings.audio_mute=0;
      PlayAudio(1);
    }

    commonInit();
    refreshUI();
    storeState();

  });
  button_theme.click(function(){

    PlayAudio(1);

    if(!settings.theme){settings.theme=0;}
    if(settings.theme==0){currentStyle.attr( "href", "dark.css" );settings.theme=1;}
    else{currentStyle.attr( "href", "light.css" );settings.theme=0;}

    refreshUI();

  });
  audio_control_volume.mousemove(function(){
        settings.audio_volume=audio_control_volume.val();
        Howler.volume(settings.audio_volume);
    });

    button_resume.click(function(){

      PlayAudio(1);

      misc_settings.resume=0;

      //intervals
      if(player.bananas>0 && monkeys.amount>0 && !intervals.monkeysEat){
        monkeysEat();
      }
      if(player.bananas>0 && elephants.amount>0 && !intervals.elephantsEat){
        elephantsEat();
      }
      if(player.bananas>0 && truck.interval_counter>0 && !intervals.truckGo){
        button_truck_upgrade.prop("disabled",true);
        truckGo();
      }



      commonInit();

    });

  //truck block
  button_truck_upgrade.click(function(){

    PlayAudio(2);

    bananasCalc(truck.capacity);
    truck.interval_counter=0;
    button_truck_upgrade.prop("disabled",true);

    truckGo();

  });
  button_engine_upgrade.click(function(){

    if(prestige2.autofriend==0){PlayAudio(2);}

    player.poop-=truck.price_speed;

    truck.speed-=40;
    truck.speed_label+=10;
    truck.amount_speed++;

    truck.price_speed = getPrices(truck.base_price,truck.pgr_speed,truck.amount_speed);

    if(intervals.truckGo){//if truck is running, restart interval for the change to set in
      clearInterval(intervals.truckGo);
      intervals.truckGo=null;
      truckGo();
    }

    storeState();
    refreshUI();

  });
  button_capacity_upgrade.click(function(){

    if(prestige2.autofriend==0){PlayAudio(2);}

    player.poop-=truck.price_capacity;

    truck.capacity+=2e5;
    truck.amount_capacity++;

    truck.price_capacity = getPrices(truck.base_price,truck.pgr_capacity,truck.amount_capacity);

    storeState();
    refreshUI();

  });

  //animals block
  button_monkeys_upgrade.click(function(){

    if(prestige2.autofriend==0){PlayAudio(2);}

    player.poop-=monkeys.price;

    monkeys.amount++;

    monkeys.price = getPrices(monkeys.base_price,monkeys.pgr,monkeys.amount);

    if(monkeys.amount==1 && !intervals.monkeysEat){
      monkeysEat();
    }

    storeState();
    refreshUI();

  });
  button_elephants_upgrade.click(function(){

    if(prestige2.autofriend==0){PlayAudio(2);}

    player.poop-=elephants.price;

    elephants.amount++;

    elephants.price = getPrices(elephants.base_price,elephants.pgr,elephants.amount);

    if(elephants.amount==1 && !intervals.elephantsEat){
      elephantsEat();
    }

    storeState();
    refreshUI();

  });

  //first upgrades block
  button_serving_upgrade.click(function(){

    if(prestige2.autoeat==0){PlayAudio(2);}

    player.poop-=player.serving_upgrade_price;
    player.serving_upgrade_price=500+500*player.serving;

    player.serving++;

    if(player.serving>=10 && prestige.driver==1){
        button_truck_upgrade.prop("disabled",true);
        truckGo();
        bananasCalc(truck.capacity);
    }

    storeState();
    refreshUI();

  });
  button_autopoop_upgrade.click(function(){

    PlayAudio(2);

    player.poop-=player.autopoop_upgrade_price;
    prestige.autopoop=1;

    button_eat.prop("disabled",false);

    storeState();
    refreshUI();

  });

  //player eating block
  button_eat.click(function(){

    PlayAudio(2);
    playerEat();

  });
  button_poop.click(function(){

    PlayAudio(3);
    playerPoop();

  });

  //prestige block
  button_prestige_show.click(function(){

    PlayAudio(1);

    if(misc_settings.prestige_toggle==0){
      misc_settings.prestige_toggle=1;
    }else{
      misc_settings.prestige_toggle=0;
    }

    refreshUI();

  });

  button_prestige_animals_upgrade.click(function(){

    PlayAudio(1);

    prestige.ppm=10;
    prestige.apm=10;

    restartGame();

  });
  button_prestige_driver_upgrade.click(function(){

    PlayAudio(1);

    prestige.driver=1;

    restartGame();

  });

  //prestige2 block
  button_story_mbm_upgrade.click(function(){

    PlayAudio(1);

    prestige2.mbm*=2;

    restartLocation();

  });
  button_story_autoeat_upgrade.click(function(){

    PlayAudio(1);

    prestige2.autoeat=1;

    restartLocation();

  });
  button_story_engine_upgrade.click(function(){

    PlayAudio(1);

    prestige2.banana_engine_speed=0.5;//this gets subtracted
    prestige2.banana_engine_speed_label=2;//this shows the speed as twice as fast

    restartLocation();

  });
  button_story_autofriend_upgrade.click(function(){

    PlayAudio(1);

    prestige2.autofriend=1;

    restartLocation();

  });
  button_story_rhino_upgrade.click(function(){

    PlayAudio(1);

    prestige2.rhino=1;

    restartLocation();

  });
  button_story_genie_upgrade.click(function(){

    PlayAudio(1);

    prestige2.genie=1;

    restartLocation();

  });
  button_story_empty_upgrade.click(function(){

    PlayAudio(1);

    restartLocation();

  });

  button_story_autofriend_prestige2.click(function(){

    PlayAudio(1);

    if(prestige2.autofriend_prestige2==0){
      prestige2.autofriend_prestige2=1;
    }else{
      prestige2.autofriend_prestige2=0;
    }

    refreshUI();

  });


});//document.ready


function init(){


  player = {
    bananas:1e9,
    poop:0,
    first_upgrades:0,//first upgrades flag
    serving:1,//amount of bananas chewed at the same time (who wouldn't want such an ability anyway?)
    serving_upgrade_price:500,
    autopoop_upgrade_price:2500
  };
  monkeys = {
    amount:0,
    base_price:5e3,
    pgr:1.5,//price growth rate
    price:5e3
  };
  elephants = {
    amount:0,
    base_price:1e5,
    pgr:1.5,
    price:1e5
  };
  truck = {
    amount_speed:0,
    amount_capacity:0,
    capacity:1e6,
    speed:520,
    speed_label:50,
    base_price:1e6,
    pgr_speed:1.5,
    pgr_capacity:1.1,
    price_speed:1e6,
    price_capacity:1e6,
    interval_counter:0
  }


}
function commonInit(){
  //inits that are relevant to both init() and loadGame()
  Howler.volume(settings.audio_volume);//default volume

  //enable the button to make sure the game is never locked up
  button_eat.prop("disabled",false);

  if(prestige2.autoeat==1 && player.bananas>0 && misc_settings.resume==0){
    playerEat();
  }

  refreshUI();
  storeState();

}

function restartGame(){

  stopIntervals();

  prestige.threshold=prestige.all_time_poop*5;
  misc_settings.prestige_toggle=0;

  init();
  commonInit();
}
function restartLocation(){
  //just resetting some prestige items
  prestige.all_time_poop=0;
  prestige.threshold=5e6;
  prestige.ppm=1;
  prestige.apm=1;
  prestige.driver=0;

  init();
  commonInit();
  refreshUI();
  storeState();
}
function stopIntervals(){
  //the messy part of stopping all intervals and resetting the relevant elements
  clearInterval(intervals.playerEat);
  clearInterval(intervals.monkeysEat);
  clearInterval(intervals.elephantsEat);
  clearInterval(intervals.truckGo);button_truck_upgrade.prop("disabled",false);
  intervals={
    playerEat:null,
    monkeysEat:null,
    elephantsEat:null,
    truckGo:null
  }
  interval_counters={
    playerEat:0,
    monkeysEat:0,
    elephantsEat:0
  }
  progressBar(pb_monkeys,0);
  progressBar(pb_elephants,0);
  progressBar(pb_truck,0);
}

function storeState(){

  //to prevent starting autofriends before resuming game
  if(misc_settings.resume==1){return;}

  if( player.poop - monkeys.price < 0 ){button_monkeys_upgrade.prop('disabled', true);}else{
    button_monkeys_upgrade.prop('disabled', false);

    if(prestige2.autofriend==1 && monkeys.amount<5 && player.serving>=10){
      button_monkeys_upgrade.trigger("click");
    }

  }

  if( player.poop - elephants.price < 0 ){button_elephants_upgrade.prop('disabled', true);}else{
    button_elephants_upgrade.prop('disabled', false);

    if(prestige2.autofriend==1 && elephants.amount<25 && player.serving>=10){
      button_elephants_upgrade.trigger("click");
    }

  }





  if( player.poop - truck.price_speed < 0 ){button_engine_upgrade.prop('disabled', true);}else{
    button_engine_upgrade.prop('disabled', false);

    if(prestige2.autofriend==1 && truck.speed>40  && player.serving>=10){
      button_engine_upgrade.trigger("click");
    }

  }

  if( player.poop - truck.price_capacity < 0 ){button_capacity_upgrade.prop('disabled', true);}else{
    button_capacity_upgrade.prop('disabled', false);

    if(prestige2.autofriend==1  && player.serving>=10){
      button_capacity_upgrade.trigger("click");
    }

  }





  if( player.poop - player.autopoop_upgrade_price < 0 ){button_autopoop_upgrade.prop('disabled', true);}else{button_autopoop_upgrade.prop('disabled', false);}

  if( player.poop - player.serving_upgrade_price < 0 ){button_serving_upgrade.prop('disabled', true);}else{
    button_serving_upgrade.prop('disabled', false);

    if(prestige2.autoeat==1 && player.serving<10){
      button_serving_upgrade.trigger("click");
    }

  }

  if(prestige.all_time_poop>=prestige.threshold){
    button_prestige_show.show();

      if(prestige2.autofriend==1 && prestige.driver==0){//prestige.driver==0 indicates whether all prestige items were done or not
        if(prestige.apm==1){
          button_prestige_animals_upgrade.trigger("click");
        }else{
          button_prestige_driver_upgrade.trigger("click");
        }
      }

  }else{
    button_prestige_show.hide();
  }

}
function refreshUI(){

  //animals and trucks
  if(player.serving>=10){
    block_animals.show();
    block_truck.show();
  }else{
    block_animals.hide();
    block_truck.hide();
  }




  //truck block

  label_truck_capacity.text( "Capacity: " + numT(truck.capacity) + " bananas" );
  label_truck_speed.text( "Speed: " + numT(truck.speed_label*prestige2.banana_engine_speed_label) + " kmph"  );
  button_capacity_upgrade.text( numT(truck.price_capacity) );

  if(truck.speed>40){
    button_engine_upgrade.show();
    button_engine_upgrade.text( numT(truck.price_speed) );
  }else{
    button_engine_upgrade.hide();
  }



  //animals block



  label_monkeys.text("Monkeys: " + monkeys.amount);
  button_monkeys_upgrade.text( numT(monkeys.price) );

  label_elephants.text("Elephants: " + elephants.amount);
  button_elephants_upgrade.text( numT(elephants.price) );


  //first upgrades block

  if(player.first_upgrades==1 && player.serving<10){
    item_serving_upgrade.show();
  }else{
    item_serving_upgrade.hide();
  }

  if(prestige.autopoop==0 && player.serving>=5){
    item_autopoop_upgrade.show();
  }else{
    item_autopoop_upgrade.hide();
  }

  label_serving.text(player.serving+"/10");
  button_serving_upgrade.text( numT(player.serving_upgrade_price) );
  button_autopoop_upgrade.text( numT(player.autopoop_upgrade_price) );


  //poop block
  poop_label.text(numT(player.poop));
  label_prestige.text(numT(prestige.all_time_poop)+"/"+numT(prestige.threshold));


  //player eating block
  if(prestige.autopoop==0){
    button_poop.css('visibility','visible');
  }else{
    button_poop.css('visibility','hidden');
  }

  //bananas
  label_bananas.text(player.bananas);


  //prestige block

  if(prestige.all_time_poop>=prestige.threshold){
    button_prestige_show.show();
  }else{
    button_prestige_show.hide();
  }

  if( prestige.ppm==10 && prestige.apm==10 && prestige.driver==1 ){
    prestige_indicators.hide();
  }else{
    prestige_indicators.show();
  }

  if(misc_settings.prestige_toggle==1){
    block_prestige.show();
    button_prestige_show.text("Hide prestige upgrades");

      //prestige upgrades state

      if( prestige.apm==10 ){button_prestige_animals_upgrade.prop('disabled', true);}else{button_prestige_animals_upgrade.prop('disabled', false);}

      if( prestige.driver==1 ){button_prestige_driver_upgrade.prop('disabled', true);}else{button_prestige_driver_upgrade.prop('disabled', false);}


  }else{
    block_prestige.hide();
    button_prestige_show.text("See prestige upgrades");
  }

  //story (prestige2) block

  if(player.bananas==0){
    all.hide();
    block_story.show();
    block_ending.hide();

      if(prestige2.locations<=0){
        block_story.hide();
        block_ending.show();
      }

      //prestige2 upgrades state

      label_locations.text(prestige2.locations);
      label_mbm.text(prestige2.mbm);

      if( prestige2.mbm>=8192 ){button_story_mbm_upgrade.prop('disabled', true);}else{button_story_mbm_upgrade.prop('disabled', false);}

      if( prestige2.autoeat==1 ){button_story_autoeat_upgrade.prop('disabled', true);}else{button_story_autoeat_upgrade.prop('disabled', false);}

      if( prestige2.banana_engine_speed<1 ){button_story_engine_upgrade.prop('disabled', true);}else{button_story_engine_upgrade.prop('disabled', false);}

      if( prestige2.autofriend==1 ){button_story_autofriend_upgrade.prop('disabled', true);}else{button_story_autofriend_upgrade.prop('disabled', false);}

      if( prestige2.rhino==1 ){button_story_rhino_upgrade.prop('disabled', true);}else{button_story_rhino_upgrade.prop('disabled', false);}

      if( prestige2.genie==1 ){button_story_genie_upgrade.prop('disabled', true);}else{button_story_genie_upgrade.prop('disabled', false);}



  }else{
    all.show();
    block_story.hide();
    block_ending.hide();
  }



  //indicators

  if(prestige2.mbm>1){block_indicator.show();}
  else{block_indicator.hide();}

  indicator_mbm.html( 'Massive Banana Multiplier<br><b class="purple">x' + prestige2.mbm + '</b>');

  if( prestige2.autofriend==1 ){
    indicator_manager.show();
    block_indicator.width('50%');

              if(prestige2.autofriend_prestige2==1){

                button_story_autofriend_prestige2.text('It is ON');

              }else{
                button_story_autofriend_prestige2.text('It is OFF');
              }

  }else{
    indicator_manager.hide();
    block_indicator.width('25%');
  }


  if(misc_settings.resume==1){
    all.hide();
    block_story.hide();
    block_ending.hide();
    block_loadgame.show();
  }else{
    block_loadgame.hide();
  }




  //footer

  if(misc_settings.settings_toggle==1){
    settings_block.show();
  }else{
    settings_block.hide();
  }

  if(settings.audio_mute==1){
    button_audio.text("Turn it back on");
  }else{
    button_audio.text("Turn it off");
  }

  audio_control_volume.val(settings.audio_volume);


}

function bananasCalc(bananas_eaten){

  player.bananas-=bananas_eaten;

  if(player.bananas>0){
    label_bananas.text(player.bananas);

    save_counter++;

    if(save_counter>30){
      save_counter=0;
      saveGame();
    }

  }else{
    stopIntervals();
    player.bananas=0;
    label_bananas.text(0);

      if(prestige2.genie==1){
        prestige2.locations-=1e7;
      }else{
        prestige2.locations--;
      }

      if(prestige2.locations>0 && prestige2.autofriend_prestige2==1){
        setTimeout(function(){ restartLocation(); },2000);
      }

    refreshUI();
    saveGame();

  }

}
function poopCalc(poop_amount){

  player.poop+=poop_amount;
  prestige.all_time_poop+=poop_amount;

  poop_label.text(numT(player.poop));
  label_prestige.text(numT(prestige.all_time_poop)+"/"+numT(prestige.threshold));

}

function playerEat(){

  interval_counters.playerEat=0;
  button_eat.prop("disabled",true);
  button_poop.prop("disabled",true);

  if(!intervals.playerEat){
    intervals.playerEat=setInterval(function(){

      interval_counters.playerEat++;
      progressBar(pb_eat,interval_counters.playerEat);

      if(interval_counters.playerEat>=100){

        PlayAudio(3);

        clearInterval(intervals.playerEat);
        intervals.playerEat=null;
        interval_counters.playerEat=0;
        progressBar(pb_eat,0);
        button_poop.prop("disabled",false);

        bananasCalc(player.serving*prestige.ppm*prestige2.mbm);

          if(prestige.autopoop==1){
            playerPoop();
          }

      }



    },10);
  }


}
function playerPoop(){
  button_eat.prop("disabled",false);
  button_poop.prop("disabled",true);

  poopCalc(prestige.pps*player.serving*prestige.ppm*prestige2.mbm);

  if(player.first_upgrades==0 && player.poop>=500){
    player.first_upgrades=1;
  }

  storeState();
  refreshUI();

  if(prestige2.autoeat==1 && player.bananas>0){
    playerEat();
  }

}

function monkeysEat(){

  interval_counters.monkeysEat=0;

  if(!intervals.monkeysEat){

    intervals.monkeysEat=setInterval(function(){

      interval_counters.monkeysEat+=2;
      progressBar(pb_monkeys,interval_counters.monkeysEat);

      if(interval_counters.monkeysEat>=102){

        PlayAudio(3);
        interval_counters.monkeysEat=0;
        progressBar(pb_monkeys,0);

        bananasCalc(monkeys.amount*prestige.apm*prestige2.mbm);
        poopCalc(prestige.pps*monkeys.amount*prestige.apm*prestige2.mbm);
        storeState();

      }

    },25);
  }


}
function elephantsEat(){

  interval_counters.elephantsEat=0;

  if(!intervals.elephantsEat){
    intervals.elephantsEat=setInterval(function(){

      interval_counters.elephantsEat+=2;
      progressBar(pb_elephants,interval_counters.elephantsEat);

      if(interval_counters.elephantsEat>=102){

        PlayAudio(3);
        interval_counters.elephantsEat=0;
        progressBar(pb_elephants,0);

        bananasCalc(100*elephants.amount*prestige.apm*prestige2.mbm);
        poopCalc(100*prestige.pps*elephants.amount*prestige.apm*prestige2.mbm);
        storeState();

      }

    },55);
  }

}

function truckGo(){

  if(!intervals.truckGo){
    intervals.truckGo=setInterval(function(){

      truck.interval_counter+=1;
      progressBar(pb_truck,truck.interval_counter);

      if(truck.interval_counter>=101){

        PlayAudio(3);
        truck.interval_counter=0;
        progressBar(pb_truck,0);
        clearInterval(intervals.truckGo);
        intervals.truckGo=null;

          if(prestige.driver==1){
            button_truck_upgrade.prop("disabled",true);
            truckGo();
            bananasCalc(truck.capacity);
          }else{
            button_truck_upgrade.prop("disabled",false);
          }

      }

    },(truck.speed*prestige2.banana_engine_speed));
  }

}

function saveGame(){

  player.time=Date.now();

  let gameData = {
      universal:[player,prestige,prestige2,settings],
      upgrades:[monkeys,elephants,truck]
    };

    gameData=LZString.compressToBase64(JSON.stringify(gameData));
    localStorage.setItem(savefile_name, gameData);
}
function loadGame(){
  let gameData=localStorage.getItem(savefile_name);
  gameData = JSON.parse(LZString.decompressFromBase64(gameData));

    player=gameData.universal[0];
    prestige=gameData.universal[1];
    prestige2=gameData.universal[2];
    settings=gameData.universal[3];

    monkeys=gameData.upgrades[0];
    elephants=gameData.upgrades[1];
    truck=gameData.upgrades[2];

    if(!settings.theme){settings.theme=0;}
    if(settings.theme==0){currentStyle.attr( "href", "light.css" );}
    else{currentStyle.attr( "href", "dark.css" );}

    misc_settings.resume=1;//marking that the game is ready to resume


}
function delSave(){
  localStorage.removeItem(savefile_name);
}


function getPrices(base_price,growth_rate,current_amount){

  let price=[0,0,0];

  price=base_price * Math.pow(growth_rate,current_amount) * (Math.pow(growth_rate,1)-1) / (growth_rate-1);

  //let result=base_price*Math.pow(growth_rate,9);
  return price;

}
function getPrices2(base_price,growth_rate,current_amount,desired_amount){

  return base_price * Math.pow(growth_rate,current_amount) * (Math.pow(growth_rate,desired_amount)-1) / (growth_rate-1);

}

function numT(number, decPlaces=2) {

  //numTransform

  //my optimization: it used to do abbrev.length in two places, since the length here is not variable, I cache it. Performance boost is likely to be very small, but as this is one of the most used functions in the game, I want to make sure it is ultra-optimized

  if(settings.scientific==0){

  var abbrev_length=64;

          number = Math.round(number*100)/100;//my addition: round any incoming floats first

          // 2 decimal places => 100, 3 => 1000, etc
          decPlaces = Math.pow(10,decPlaces);
          // Enumerate number abbreviations
          var abbrev = [ "k", "M", "B", "T", "Q", "kQ", "S", "kS", "c", "kc", "d", "kd", "e", "ke", "f", "kf", "F", "kF", "h", "kh", "j", "kj", "L", "kL", "Na", "kNa", "Nb", "kNb", "Nc", "kNc", "Nd", "kNd", "Ne", "kNe", "Nf", "kNf", "Ng", "kNg", "Nh", "kNh", "Ni", "kNi", "Nj", "kNj", "Nk", "kNk", "Nl", "kNl", "Nm", "kNm", "Np", "kNp", "Nq", "kNq", "Nr", "kNr", "Ns", "kNs", "Nt", "kNt", "Nu", "kNu", "Nv", "inf" ];

          // Go through the array backwards, so we do the largest first
          for (var i=abbrev_length-1; i>=0; i--) {
              // Convert array index to "1000", "1000000", etc
              var size = Math.pow(10,(i+1)*3);
              // If the number is bigger or equal do the abbreviation
              if(size <= number) {
                   // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                   // This gives us nice rounding to a particular decimal place.
                   number = Math.round(number*decPlaces/size)/decPlaces;
                   // Handle special case where we round up to the next abbreviation
                   if((number == 1000) && (i < abbrev_length - 1)) {
                       number = 1;
                       i++;
                   }
                   // Add the letter for the abbreviation
                   number += ""+abbrev[i];
                   // We are done... stop
                   break;
              }
          }

        }else{
          if(number>1000){return Number(number).toExponential(2).replace(/\+/g, "");}
          else{number = Math.round(number*100)/100;}
        }

          return number;
    }
function numT2(number){
  if(number>1000){return Number(number).toExponential(3);}
  else{number = Math.round(number*1000)/1000;}
  return number;
}


function progressBar($element, $percent){
  $element.width($percent+'%');
}


function choose(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum and the minimum are inclusive
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function setupAudio(){

  click1 = new Howl({
    src: ['snd/system.wav']
  });

  click2 = new Howl({
    src: ['snd/click1.wav']
  });

  click3 = new Howl({
    src: ['snd/collect.wav']
  });

}
function PlayAudio(snd){

  if(audio_initiated==0){
    audio_initiated=1;
    setupAudio();
  }

  if(settings.audio_mute==0){
		switch(snd){
			case 1: click1.play(); break;//system button click
			case 2: click2.play(); break;//game button click
			case 3: click3.play(); break;//progress bar end
			}
	}
}
