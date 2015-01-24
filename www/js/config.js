angular.module('ePCR.config', [])

  .constant('DB_CONFIG', {
      name: 'myPCR',
      description: 'Electronic Patient Care Report',
      version: '',
      size: 2 * 1024 * 1024,
      tables: [
   {
      "name":"report",
      "columns":{
         "id":{
            "type":"INTEGER",
            "null":"NOT NULL",
            "primary":true,
            "auto_increment":true
         },
         "last_name":{
            "type":"TEXT"
         },
         "first_name":{
            "type":"TEXT"
         },
         "date_of_birth":{
            "type":"TEXT"
         },
         "gender":{
            "type":"BOOLEAN"
         },
         "weight":{
            "type":"FLOAT"
         },
         "weight_unit":{
            "type":"TEXT"
         },
         "profile_picture":{
            "type":"TEXT"
         },
         "address_street":{
            "type":"TEXT"
         },
         "address_city":{
            "type":"TEXT"
         },
         "address_province":{
            "type":"TEXT"
         },
         "phone_home":{
            "type":"TEXT"
         },
         "phone_work":{
            "type":"TEXT"
         },
         "phone_cell":{
            "type":"TEXT"
         },
         "insurance":{
            "type":"TEXT"
         },
         "mrn":{
            "type":"TEXT"
         },
         "next_of_kin":{
            "type":"TEXT"
         },
         "next_of_kin_phone":{
            "type":"TEXT"
         },
         "primary_complaint":{
            "type":"TEXT"
         },
         "primary_complaint_other":{
            "type":"TEXT"
         },
         "secondary_complaint":{
            "type":"TEXT"
         },
         "difficulty_breathing":{
            "type":"BOOLEAN"
         },
         "chest_pain":{
            "type":"BOOLEAN"
         },
         "nausea":{
            "type":"BOOLEAN"
         },
         "vomiting":{
            "type":"BOOLEAN"
         },
         "diarrhea":{
            "type":"BOOLEAN"
         },
         "dizziness":{
            "type":"BOOLEAN"
         },
         "headache":{
            "type":"BOOLEAN"
         },
         "loss_of_c":{
            "type":"BOOLEAN"
         },
         "numb_tingling":{
            "type":"BOOLEAN"
         },
         "general_weakness":{
            "type":"BOOLEAN"
         },
         "lethargy":{
            "type":"BOOLEAN"
         },
         "neck_pain":{
            "type":"BOOLEAN"
         },
         "created":{
            "type":"TIMESTAMP",
            "null":"NOT NULL",
            "default":"CURRENT_TIMESTAMP"
         }
      }
   },
   {
      "name":"vitals",
      "columns":{
         "id":{
            "type":"INTEGER",
            "null":"NOT NULL",
            "primary":true,
            "auto_increment":true
         },
         "report_id":{
            "type":"INTEGER",
            "null":"NOT NULL"
         },
         "hr":{
            "type":"INTEGER"
         },
         "sys":{
            "type":"INTEGER"
         },
         "dia":{
            "type":"INTEGER"
         },
         "fio2":{
            "type":"TEXT"
         },
         "spo2":{
            "type":"INTEGER"
         },
         "resp":{
            "type":"INTEGER"
         },
         "level_of_c":{
            "type":"TEXT"
         },
         "perrl":{
            "type":"BOOLEAN"
         },
         "left_eye":{
            "type":"INTEGER"
         },
         "responsive":{
            "type":"BOOLEAN"
         },
         "right_eye":{
            "type":"INTEGER"
         },
         "bgl":{
            "type":"FLOAT"
         },
         "bgl_unit":{
            "type":"BOOLEAN"
         },
         "temp":{
            "type":"FLOAT"
         },
         "temp_unit":{
            "type":"BOOLEAN"
         },
         "etco2":{
            "type":"INTEGER"
         },
         "pain":{
            "type":"INTEGER"
         },
         "created":{
            "type":"TIMESTAMP",
            "null":"NOT NULL",
            "default":"CURRENT_TIMESTAMP"
         }
      }
   },
//   {
//      "name":"chief_complaint",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "primary_complaint":{
//            "type":"TEXT"
//         },
//         "primary_other":{
//            "type":"TEXT"
//         },
//         "secondary_complaint":{
//            "type":"TEXT"
//         },
//         "diff_breathing":{
//            "type":"TEXT"
//         },
//         "chest_pain":{
//            "type":"TEXT"
//         },
//         "nausea":{
//            "type":"TEXT"
//         },
//         "vomiting":{
//            "type":"TEXT"
//         },
//         "diarrhea":{
//            "type":"TEXT"
//         },
//         "dizziness":{
//            "type":"TEXT"
//         },
//         "headache":{
//            "type":"TEXT"
//         },
//         "loc":{
//            "type":"TEXT"
//         },
//         "numb_tingling":{
//            "type":"TEXT"
//         },
//         "gal_weakness":{
//            "type":"TEXT"
//         },
//         "lethargy":{
//            "type":"TEXT"
//         },
//         "neck_pain":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"patient_hx",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "allergies":{
//            "type":"TEXT"
//         },
//         "custom_allergies":{
//            "type":"TEXT"
//         },
//         "conditions":{
//            "type":"TEXT"
//         },
//         "custom_conditions":{
//            "type":"TEXT"
//         },
//         "medications":{
//            "type":"TEXT"
//         },
//         "custom_medications":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"neuro",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "avpu":{
//            "type":"TEXT"
//         },
//         "gcs":{
//            "type":"BOOLEAN"
//         },
//         "eyes":{
//            "type":"INTEGER"
//         },
//         "verbal":{
//            "type":"INTEGER"
//         },
//         "motor":{
//            "type":"INTEGER"
//         },
//         "luxr":{
//            "type":"BOOLEAN"
//         },
//         "ruxr":{
//            "type":"BOOLEAN"
//         },
//         "llxr":{
//            "type":"BOOLEAN"
//         },
//         "rlxr":{
//            "type":"BOOLEAN"
//         },
//         "suspect_stroke":{
//            "type":"BOOLEAN"
//         },
//         "facial_droop":{
//            "type":"BOOLEAN"
//         },
//         "facial_droop_side":{
//            "type":"TEXT"
//         },
//         "arm_drift":{
//            "type":"BOOLEAN"
//         },
//         "arm_drift_side":{
//            "type":"TEXT"
//         },
//         "speech":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"abc",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "open_patent":{
//            "type":"BOOLEAN"
//         },
//         "tracheal_deviation":{
//            "type":"BOOLEAN"
//         },
//         "tracheal_deviation_side":{
//            "type":"BOOLEAN"
//         },
//         "interventions":{
//            "type":"BOOLEAN"
//         },
//         "breathing_type":{
//            "type":"TEXT"
//         },
//         "laboured":{
//            "type":"BOOLEAN"
//         },
//         "effective":{
//            "type":"BOOLEAN"
//         },
//         "accessory_muscle":{
//            "type":"BOOLEAN"
//         },
//         "nasal_flare":{
//            "type":"BOOLEAN"
//         },
//         "cough":{
//            "type":"BOOLEAN"
//         },
//         "productive":{
//            "type":"BOOLEAN"
//         },
//         "subcut_emph":{
//            "type":"BOOLEAN"
//         },
//         "flailed_chest":{
//            "type":"BOOLEAN"
//         },
//         "flailed_chest_side":{
//            "type":"BOOLEAN"
//         },
//         "suspect_pneu":{
//            "type":"BOOLEAN"
//         },
//         "suspect_hemo":{
//            "type":"BOOLEAN"
//         },
//         "ctax4":{
//            "type":"BOOLEAN"
//         },
//         "ul_sound":{
//            "type":"TEXT"
//         },
//         "ur_sound":{
//            "type":"TEXT"
//         },
//         "ll_sound":{
//            "type":"TEXT"
//         },
//         "lr_sound":{
//            "type":"TEXT"
//         },
//         "pulse_location":{
//            "type":"TEXT"
//         },
//         "pulse_regularity":{
//            "type":"BOOLEAN"
//         },
//         "pulse_quality":{
//            "type":"TEXT"
//         },
//         "jvd":{
//            "type":"BOOLEAN"
//         },
//         "cap_refill":{
//            "type":"BOOLEAN"
//         },
//         "skin":{
//            "type":"TEXT"
//         },
//         "abctemp":{
//            "type":"TEXT"
//         },
//         "dry":{
//            "type":"BOOLEAN"
//         },
//         "heart_tones":{
//            "type":"TEXT"
//         },
//         "heart_tones_quality":{
//            "type":"TEXT"
//         },
//         "peripheral_edema":{
//            "type":"BOOLEAN"
//         },
//         "peripheral_edema_location":{
//            "type":"TEXT"
//         },
//         "edema_severity":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"trauma",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "isTrauma":{
//            "type":"BOOLEAN"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"trauma_auto",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "car":{
//            "type":"TEXT"
//         },
//         "seat":{
//            "type":"TEXT"
//         },
//         "seatbelt":{
//            "type":"BOOLEAN"
//         },
//         "airbag":{
//            "type":"BOOLEAN"
//         },
//         "helmet":{
//            "type":"BOOLEAN"
//         },
//         "leathers":{
//            "type":"BOOLEAN"
//         },
//         "nb_occupants":{
//            "type":"INTEGER"
//         },
//         "approx_speed":{
//            "type":"INTEGER"
//         },
//         "speed_unit":{
//            "type":"TEXT"
//         },
//         "removed_by":{
//            "type":"TEXT"
//         },
//         "per":{
//            "type":"TEXT"
//         },
//         "photo":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"trauma_penetrating",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "assault":{
//            "type":"BOOLEAN"
//         },
//         "moi":{
//            "type":"TEXT"
//         },
//         "velocity":{
//            "type":"TEXT"
//         },
//         "bleeding":{
//            "type":"BOOLEAN"
//         },
//         "controlled":{
//            "type":"BOOLEAN"
//         },
//         "head":{
//            "type":"BOOLEAN"
//         },
//         "neck":{
//            "type":"BOOLEAN"
//         },
//         "chest":{
//            "type":"BOOLEAN"
//         },
//         "abd":{
//            "type":"BOOLEAN"
//         },
//         "pelvis":{
//            "type":"BOOLEAN"
//         },
//         "ulxr":{
//            "type":"BOOLEAN"
//         },
//         "urxr":{
//            "type":"BOOLEAN"
//         },
//         "llxr":{
//            "type":"BOOLEAN"
//         },
//         "lrxr":{
//            "type":"BOOLEAN"
//         },
//         "back":{
//            "type":"BOOLEAN"
//         },
//         "photo":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"trauma_blunt",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "assault":{
//            "type":"BOOLEAN"
//         },
//         "moi":{
//            "type":"TEXT"
//         },
//         "bleeding":{
//            "type":"BOOLEAN"
//         },
//         "controlled":{
//            "type":"BOOLEAN"
//         },
//         "head":{
//            "type":"BOOLEAN"
//         },
//         "neck":{
//            "type":"BOOLEAN"
//         },
//         "chest":{
//            "type":"BOOLEAN"
//         },
//         "abd":{
//            "type":"BOOLEAN"
//         },
//         "pelvis":{
//            "type":"BOOLEAN"
//         },
//         "ulxr":{
//            "type":"BOOLEAN"
//         },
//         "urxr":{
//            "type":"BOOLEAN"
//         },
//         "llxr":{
//            "type":"BOOLEAN"
//         },
//         "lrxr":{
//            "type":"BOOLEAN"
//         },
//         "back":{
//            "type":"BOOLEAN"
//         },
//         "photo":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"trauma_fall",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "assault":{
//            "type":"BOOLEAN"
//         },
//         "distance":{
//            "type":"INTEGER"
//         },
//         "distance_unit":{
//            "type":"TEXT"
//         },
//         "surface":{
//            "type":"TEXT"
//         },
//         "loss_of_c":{
//            "type":"BOOLEAN"
//         },
//         "loss_of_c_time":{
//            "type":"FLOAT"
//         },
//         "bleeding":{
//            "type":"BOOLEAN"
//         },
//         "controlled":{
//            "type":"BOOLEAN"
//         },
//         "head":{
//            "type":"BOOLEAN"
//         },
//         "neck":{
//            "type":"BOOLEAN"
//         },
//         "chest":{
//            "type":"BOOLEAN"
//         },
//         "abd":{
//            "type":"BOOLEAN"
//         },
//         "pelvis":{
//            "type":"BOOLEAN"
//         },
//         "ulxr":{
//            "type":"BOOLEAN"
//         },
//         "urxr":{
//            "type":"BOOLEAN"
//         },
//         "llxr":{
//            "type":"BOOLEAN"
//         },
//         "lrxr":{
//            "type":"BOOLEAN"
//         },
//         "back":{
//            "type":"BOOLEAN"
//         },
//         "photo":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"trauma_burn",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "head_front":{
//            "type":"INTEGER"
//         },
//         "head_back":{
//            "type":"INTEGER"
//         },
//         "chest":{
//            "type":"INTEGER"
//         },
//         "abdomen":{
//            "type":"INTEGER"
//         },
//         "upper_back":{
//            "type":"INTEGER"
//         },
//         "lower_back":{
//            "type":"INTEGER"
//         },
//         "ulx_up_front":{
//            "type":"INTEGER"
//         },
//         "ulx_low_front":{
//            "type":"INTEGER"
//         },
//         "ulx_up_back":{
//            "type":"INTEGER"
//         },
//         "ulx_low_back":{
//            "type":"INTEGER"
//         },
//         "urx_up_front":{
//            "type":"INTEGER"
//         },
//         "urx_low_front":{
//            "type":"INTEGER"
//         },
//         "urx_up_back":{
//            "type":"INTEGER"
//         },
//         "urx_low_back":{
//            "type":"INTEGER"
//         },
//         "llx_up_front":{
//            "type":"INTEGER"
//         },
//         "llx_low_front":{
//            "type":"INTEGER"
//         },
//         "llx_up_back":{
//            "type":"INTEGER"
//         },
//         "llx_low_back":{
//            "type":"INTEGER"
//         },
//         "lrx_up_front":{
//            "type":"INTEGER"
//         },
//         "lrx_low_front":{
//            "type":"INTEGER"
//         },
//         "lrx_up_back":{
//            "type":"INTEGER"
//         },
//         "lrx_low_back":{
//            "type":"INTEGER"
//         },
//         "total_surface":{
//            "type":"INTEGER"
//         },
//         "body_type":{
//            "type":"TEXT"
//         },
//         "photo":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"gi_gu",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "gi_assessed":{
//            "type":"BOOLEAN"
//         },
//         "flat":{
//            "type":"BOOLEAN"
//         },
//         "soft":{
//            "type":"BOOLEAN"
//         },
//         "tender":{
//            "type":"BOOLEAN"
//         },
//         "rebound":{
//            "type":"BOOLEAN"
//         },
//         "luq":{
//            "type":"BOOLEAN"
//         },
//         "ruq":{
//            "type":"BOOLEAN"
//         },
//         "llq":{
//            "type":"BOOLEAN"
//         },
//         "rlq":{
//            "type":"BOOLEAN"
//         },
//         "epigastric":{
//            "type":"BOOLEAN"
//         },
//         "suprapubic":{
//            "type":"BOOLEAN"
//         },
//         "obese":{
//            "type":"BOOLEAN"
//         },
//         "last_bm":{
//            "type":"TEXT"
//         },
//         "loi":{
//            "type":"TEXT"
//         },
//         "gu_assessed":{
//            "type":"BOOLEAN"
//         },
//         "pain":{
//            "type":"BOOLEAN"
//         },
//         "frequency":{
//            "type":"BOOLEAN"
//         },
//         "hematuria":{
//            "type":"BOOLEAN"
//         },
//         "incontinence":{
//            "type":"BOOLEAN"
//         },
//         "bladder_distention":{
//            "type":"BOOLEAN"
//         },
//         "urinary_urgency":{
//            "type":"BOOLEAN"
//         },
//         "last_void":{
//            "type":"TEXT"
//         },
//         "gyn_assessed":{
//            "type":"BOOLEAN"
//         },
//         "gravid":{
//            "type":"INTEGER"
//         },
//         "term":{
//            "type":"INTEGER"
//         },
//         "para":{
//            "type":"INTEGER"
//         },
//         "abortia":{
//            "type":"INTEGER"
//         },
//         "live":{
//            "type":"INTEGER"
//         },
//         "last_menstruation":{
//            "type":"TEXT"
//         },
//         "discharge":{
//            "type":"BOOLEAN"
//         },
//         "substance":{
//            "type":"TEXT"
//         },
//         "pregnant":{
//            "type":"TEXT"
//         },
//         "edc":{
//            "type":"TEXT"
//         },
//         "gestation_known":{
//            "type":"BOOLEAN"
//         },
//         "gest_weeks":{
//            "type":"TEXT"
//         },
//         "membr_intact":{
//            "type":"BOOLEAN"
//         },
//         "time_ruptured":{
//            "type":"TEXT"
//         },
//         "fluid":{
//            "type":"TEXT"
//         },
//         "expected_babies":{
//            "type":"INTEGER"
//         },
//         "fetal_mvmt":{
//            "type":"BOOLEAN"
//         },
//         "last_mvmt":{
//            "type":"TEXT"
//         },
//         "mvmt_per_hr":{
//            "type":"INTEGER"
//         },
//         "contractions":{
//            "type":"BOOLEAN"
//         },
//         "contraction_duration":{
//            "type":"INTEGER"
//         },
//         "contraction_separation":{
//            "type":"INTEGER"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"field_delivery",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "presentation":{
//            "type":"TEXT"
//         },
//         "delivery_time":{
//            "type":"TEXT"
//         },
//         "meconium":{
//            "type":"TEXT"
//         },
//         "cord_length":{
//            "type":"INTEGER"
//         },
//         "apgar1":{
//            "type":"INTEGER"
//         },
//         "apgar5":{
//            "type":"INTEGER"
//         },
//         "stimulation":{
//            "type":"BOOLEAN"
//         },
//         "stimulation_type":{
//            "type":"TEXT"
//         },
//         "placenta":{
//            "type":"BOOLEAN"
//         },
//         "placenta_time":{
//            "type":"TEXT"
//         },
//         "placenta_intact":{
//            "type":"BOOLEAN"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"apgar",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "appearance1":{
//            "type":"TEXT"
//         },
//         "pulse1":{
//            "type":"TEXT"
//         },
//         "grimace1":{
//            "type":"TEXT"
//         },
//         "activity1":{
//            "type":"TEXT"
//         },
//         "respirations1":{
//            "type":"TEXT"
//         },
//         "total1":{
//            "type":"INTEGER"
//         },
//         "time1":{
//            "type":"TEXT"
//         },
//         "appearance5":{
//            "type":"TEXT"
//         },
//         "pulse5":{
//            "type":"TEXT"
//         },
//         "grimace5":{
//            "type":"TEXT"
//         },
//         "activity5":{
//            "type":"TEXT"
//         },
//         "respirations5":{
//            "type":"TEXT"
//         },
//         "total5":{
//            "type":"INTEGER"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"muscular_skeletal",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "nocomplaint":{
//            "type":"BOOLEAN"
//         },
//         "muscular":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"airway",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "oxygen":{
//            "type":"INTEGER"
//         },
//         "basic_maneuvers":{
//            "type":"TEXT"
//         },
//         "opa":{
//            "type":"TEXT"
//         },
//         "npa":{
//            "type":"TEXT"
//         },
//         "bvm":{
//            "type":"BOOLEAN"
//         },
//         "rate":{
//            "type":"INTEGER"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"invasive_airway",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "secured":{
//            "type":"BOOLEAN"
//         },
//         "device":{
//            "type":"TEXT"
//         },
//         "distance":{
//            "type":"INTEGER"
//         },
//         "size":{
//            "type":"FLOAT"
//         },
//         "cuffed":{
//            "type":"BOOLEAN"
//         },
//         "inflation":{
//            "type":"INTEGER"
//         },
//         "bvm":{
//            "type":"BOOLEAN"
//         },
//         "attempts":{
//            "type":"INTEGER"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"ventilator",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "vented":{
//            "type":"BOOLEAN"
//         },
//         "control":{
//            "type":"BOOLEAN"
//         },
//         "mode":{
//            "type":"BOOLEAN"
//         },
//         "rate":{
//            "type":"INTEGER"
//         },
//         "tidal_v":{
//            "type":"INTEGER"
//         },
//         "insp_time":{
//            "type":"INTEGER"
//         },
//         "i_ratio":{
//            "type":"INTEGER"
//         },
//         "e_ratio":{
//            "type":"INTEGER"
//         },
//         "fiO2":{
//            "type":"INTEGER"
//         },
//         "peep":{
//            "type":"INTEGER"
//         },
//         "sensitivity":{
//            "type":"INTEGER"
//         },
//         "expir_p":{
//            "type":"INTEGER"
//         },
//         "expir_tidal_v":{
//            "type":"INTEGER"
//         },
//         "max_insp_p":{
//            "type":"INTEGER"
//         },
//         "plateau_p":{
//            "type":"INTEGER"
//         },
//         "p_support":{
//            "type":"INTEGER"
//         },
//         "high_p_lim":{
//            "type":"INTEGER"
//         },
//         "low_p_lim":{
//            "type":"INTEGER"
//         },
//         "low_min_v":{
//            "type":"INTEGER"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"cpap_bipap",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "device":{
//            "type":"BOOLEAN"
//         },
//         "size":{
//            "type":"INTEGER"
//         },
//         "fiO2":{
//            "type":"INTEGER"
//         },
//         "peep":{
//            "type":"INTEGER"
//         },
//         "pressure":{
//            "type":"INTEGER"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"suction",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "suction":{
//            "type":"BOOLEAN"
//         },
//         "duration":{
//            "type":"INTEGER"
//         },
//         "amount":{
//            "type":"INTEGER"
//         },
//         "tip":{
//            "type":"INTEGER"
//         },
//         "size":{
//            "type":"INTEGER"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"iv_io",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "site":{
//            "type":"BOOLEAN"
//         },
//         "side":{
//            "type":"BOOLEAN"
//         },
//         "gauge":{
//            "type":"TEXT"
//         },
//         "attempts":{
//            "type":"INTEGER"
//         },
//         "successful":{
//            "type":"BOOLEAN"
//         },
//         "fluid":{
//            "type":"TEXT"
//         },
//         "fluid_other":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"splinting",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "location":{
//            "type":"TEXT"
//         },
//         "side":{
//            "type":"BOOLEAN"
//         },
//         "prior":{
//            "type":"BOOLEAN"
//         },
//         "post":{
//            "type":"BOOLEAN"
//         },
//         "traction":{
//            "type":"BOOLEAN"
//         },
//         "type":{
//            "type":"TEXT"
//         },
//         "type_other":{
//            "type":"TEXT"
//         },
//         "position":{
//            "type":"TEXT"
//         },
//         "position_other":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"medication",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "isGeneric":{
//            "type":"BOOLEAN"
//         },
//         "medication":{
//            "type":"TEXT"
//         },
//         "medic_other":{
//            "type":"TEXT"
//         },
//         "dose":{
//            "type":"FLOAT"
//         },
//         "dose_unit":{
//            "type":"TEXT"
//         },
//         "route":{
//            "type":"TEXT"
//         },
//         "route_other":{
//            "type":"TEXT"
//         },
//         "indication":{
//            "type":"TEXT"
//         },
//         "admin":{
//            "type":"TEXT"
//         },
//         "admin_other":{
//            "type":"TEXT"
//         },
//         "same_dose":{
//            "type":"INTEGER"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"c_spine",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "manual":{
//            "type":"BOOLEAN"
//         },
//         "c_collar":{
//            "type":"BOOLEAN"
//         },
//         "size":{
//            "type":"TEXT"
//         },
//         "backboard":{
//            "type":"TEXT"
//         },
//         "transferred":{
//            "type":"TEXT"
//         },
//         "secured":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"in_out",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "intake_volume":{
//            "type":"INTEGER"
//         },
//         "intake_substance":{
//            "type":"TEXT"
//         },
//         "intake_other":{
//            "type":"TEXT"
//         },
//         "outtake_volume":{
//            "type":"INTEGER"
//         },
//         "outtake_substance":{
//            "type":"TEXT"
//         },
//         "outtake_other":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"ecg",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "leads_nb":{
//            "type":"BOOLEAN"
//         },
//         "rhythm":{
//            "type":"TEXT"
//         },
//         "regular":{
//            "type":"BOOLEAN"
//         },
//         "bbb":{
//            "type":"BOOLEAN"
//         },
//         "bbb_side":{
//            "type":"BOOLEAN"
//         },
//         "st_changes":{
//            "type":"BOOLEAN"
//         },
//         "bi":{
//            "type":"TEXT"
//         },
//         "bii":{
//            "type":"TEXT"
//         },
//         "biii":{
//            "type":"TEXT"
//         },
//         "bavr":{
//            "type":"TEXT"
//         },
//         "bavl":{
//            "type":"TEXT"
//         },
//         "bavf":{
//            "type":"TEXT"
//         },
//         "bv1":{
//            "type":"TEXT"
//         },
//         "bv2":{
//            "type":"TEXT"
//         },
//         "bv3":{
//            "type":"TEXT"
//         },
//         "bv4":{
//            "type":"TEXT"
//         },
//         "bv5":{
//            "type":"TEXT"
//         },
//         "bv6":{
//            "type":"TEXT"
//         },
//         "ecg_pacs":{
//            "type":"BOOLEAN"
//         },
//         "ecg_pvcs":{
//            "type":"BOOLEAN"
//         },
//         "photo":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"signatures",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "sigPractitionerText":{
//            "type":"TEXT"
//         },
//         "sigPatientText":{
//            "type":"TEXT"
//         },
//         "noSign":{
//            "type":"BOOLEAN"
//         },
//         "reason":{
//            "type":"TEXT"
//         },
//         "sigHospReprText":{
//            "type":"TEXT"
//         },
//         "sigWitnessText":{
//            "type":"TEXT"
//         },
//         "sigPractitioner":{
//            "type":"TEXT"
//         },
//         "sigPatient":{
//            "type":"TEXT"
//         },
//         "sigHospRepr":{
//            "type":"TEXT"
//         },
//         "sigWitness":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"call_info",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "attendant1":{
//            "type":"TEXT"
//         },
//         "attendant1_other":{
//            "type":"TEXT"
//         },
//         "attendant2":{
//            "type":"TEXT"
//         },
//         "attendant2_other":{
//            "type":"TEXT"
//         },
//         "driver":{
//            "type":"TEXT"
//         },
//         "driver_other":{
//            "type":"TEXT"
//         },
//         "unit_nb":{
//            "type":"TEXT"
//         },
//         "run_nb":{
//            "type":"TEXT"
//         },
//         "respond":{
//            "type":"TEXT"
//         },
//         "milage_start":{
//            "type":"INTEGER"
//         },
//         "milage_end":{
//            "type":"INTEGER"
//         },
//         "code_en_route":{
//            "type":"TEXT"
//         },
//         "code_return":{
//            "type":"TEXT"
//         },
//         "transported_to":{
//            "type":"TEXT"
//         },
//         "transported_position":{
//            "type":"TEXT"
//         },
//         "time_notified":{
//            "type":"TEXT"
//         },
//         "time_route":{
//            "type":"TEXT"
//         },
//         "time_on_scene":{
//            "type":"TEXT"
//         },
//         "time_depart":{
//            "type":"TEXT"
//         },
//         "time_destination":{
//            "type":"TEXT"
//         },
//         "time_transfer":{
//            "type":"TEXT"
//         },
//         "time_back_service":{
//            "type":"TEXT"
//         },
//         "time_patient_contact":{
//            "type":"TEXT"
//         },
//         "ppe_gloves":{
//            "type":"BOOLEAN"
//         },
//         "ppe_eyes":{
//            "type":"BOOLEAN"
//         },
//         "ppe_reflective":{
//            "type":"BOOLEAN"
//         },
//         "ppe_isolation":{
//            "type":"BOOLEAN"
//         },
//         "ppe_mask":{
//            "type":"BOOLEAN"
//         },
//         "det1":{
//            "type":"TEXT"
//         },
//         "det2":{
//            "type":"TEXT"
//         },
//         "det3":{
//            "type":"TEXT"
//         },
//         "assistance":{
//            "type":"TEXT"
//         },
//         "other":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"no_transport",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "assessed":{
//            "type":"BOOLEAN"
//         },
//         "mentally_capable":{
//            "type":"BOOLEAN"
//         },
//         "should_trans":{
//            "type":"BOOLEAN"
//         },
//         "informed":{
//            "type":"BOOLEAN"
//         },
//         "reason":{
//            "type":"TEXT"
//         },
//         "reason_other":{
//            "type":"TEXT"
//         },
//         "left_with":{
//            "type":"TEXT"
//         },
//         "left_with_other":{
//            "type":"TEXT"
//         },
//         "consult_with":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"narrative",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "narration":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   },
//   {
//      "name":"code",
//      "columns":{
//         "id":{
//            "type":"INTEGER",
//            "null":"NOT NULL",
//            "primary":true,
//            "auto_increment":true
//         },
//         "report_id":{
//            "type":"INTEGER",
//            "null":"NOT NULL"
//         },
//         "code_name":{
//            "type":"TEXT"
//         },
//         "created":{
//            "type":"TIMESTAMP",
//            "null":"NOT NULL",
//            "default":"CURRENT_TIMESTAMP"
//         }
//      }
//   }
]
  });