//rfid_mapper.js

Module.register('rfid_mapper',{

        defaults:{
                rfidmap: {
                        "153c25d5" : "Blue Key",
                        "94663a05" : "White Card",
                        "2010ec76" : "Hilary",
                        "700aee76" : "Hank",
                        "404ced76" : "Tofu",
                        "a01eef76" : "Helen",
                }
        },

        notificationReceived: function(notification, payload, sender){
                if (notification === "SEND_RFID_MAPPER"){
                        if(payload.rfid in this.config.rfidmap){
                                var name = this.config.rfidmap[payload.rfid];
                        }else{
                                var name = "anonymous";
                        }

                        this.sendNotification("SHOW_ALERT", {
                                type:"notification",
                                message:"It's nice to meet you, " + name + " !", timer: 2000
                                }
                        );
                }

        },
});