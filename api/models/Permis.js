/**
* Permis.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	connection: 'guide_gesperm',

  attributes: {

  	WSQ_PREF: 'STRING',
  	WOR_NO: 'STRING',
  	NO_PERMIS: 'STRING',
  	PERMIS: 'STRING',
  	WOR_DESCR: 'TEXT',
  	FUN_CODE: 'STRING',
  	FUN_DESCR: 'STRING',
  	PRI_DESCR: 'STRING',
  	WOR_ISSUE_DATE: 'STRING',
  	WOR_PLAN_DATE: 'STRING',
  	DIC_DESCR: 'STRING',
  	RES_FIRST_NAME: 'STRING',
  	RES_LAST_NAME: 'STRING',
  	NIV1_CODE: 'STRING',
  	NIV1_DESCR: 'STRING',
  	MNT_DESCR: 'STRING',


  	PRI_CODE: 'INTEGER',
  	SKI_DESCR: 'STRING',

  	////////////////////////////
  	// SECTION 1
  	////////////////////////////
  	S1_TYPE_DE_TRAVAIL: 'STRING',
  	S1_DATE_EMISSION: 'STRING',
  	S1_HEURE_DE: 'STRING',
  	S1_HEURE_A: 'STRING',
  	S1_ENTREPRENEURIAT: 'STRING',
  	S1_RESPONSABLEEXECUTANT: 'STRING',
  	S1_SECTEUR: 'STRING',

  	////////////////////////////
  	// SECTION 2
  	////////////////////////////
  	S2_OP_OA: { type: 'boolean', defaultsTo: false },
  	S2_PR_RP: { type: 'boolean', defaultsTo: false },
  	S2_PY_EF: { type: 'boolean', defaultsTo: false },
  	S2_PA_EP: { type: 'boolean', defaultsTo: false },
  	S2_VP_PC: { type: 'boolean', defaultsTo: false },

  	S2_HS_SH: { type: 'boolean', defaultsTo: false },
  	S2_CA_LL: { type: 'boolean', defaultsTo: false },
  	S2_EC_SC: { type: 'boolean', defaultsTo: false },
  	S2_EA_SL: { type: 'boolean', defaultsTo: false },
  	S2_EA_EP: { type: 'boolean', defaultsTo: false },
  	S2_VF_AM: { type: 'boolean', defaultsTo: false },
  	S2_AL_LE: { type: 'boolean', defaultsTo: false },

  	S2_AL_LA: { type: 'boolean', defaultsTo: false },
  	S2_EA_AL: { type: 'boolean', defaultsTo: false },
  	S2_EX_FE: { type: 'boolean', defaultsTo: false },
  	S2_AE_EA: { type: 'boolean', defaultsTo: false },
  	S2_AS_WA: { type: 'boolean', defaultsTo: false },

  	S2_SB_BA: { type: 'boolean', defaultsTo: false },
  	S2_EP_PS: { type: 'boolean', defaultsTo: false },
  	S2_OM_ME: { type: 'boolean', defaultsTo: false },
  	S2_VA_MV: { type: 'boolean', defaultsTo: false },
  	S2_DG_GD: { type: 'boolean', defaultsTo: false },

  	S2_CR_RC: { type: 'boolean', defaultsTo: false },
  	S2_MT_EG: { type: 'boolean', defaultsTo: false },
  	S2_OA_SP: { type: 'boolean', defaultsTo: false },
  	S2_BE_WH: { type: 'boolean', defaultsTo: false },
  	S2_CP_PL: { type: 'boolean', defaultsTo: false },
  	S2_OP_AD: { type: 'boolean', defaultsTo: false },



  	////////////////////////////
  	// SECTION 3
  	////////////////////////////
  	S3_SE_CS: { type: 'boolean', defaultsTo: false },
  	S3_SI_FL: { type: 'boolean', defaultsTo: false },



  	////////////////////////////
  	// SECTION 4
  	////////////////////////////
  	S4_DR_DR: { type: 'boolean', defaultsTo: false },
  	S4_PU_PU: { type: 'boolean', defaultsTo: false },
  	S4_NV_ST: { type: 'boolean', defaultsTo: false },
  	S4_AU_OT: { type: 'boolean', defaultsTo: false },
  	S4_AU_OT_DESCRIPTION: 'STRING',
  	S4_LA_CL: { type: 'boolean', defaultsTo: false },
  	S4_AE_VE: { type: 'boolean', defaultsTo: false },
  	S4_DE_DE: { type: 'boolean', defaultsTo: false },
  	S4_ER_DC: { type: 'boolean', defaultsTo: false },
  	S4_OB_BL: { type: 'boolean', defaultsTo: false },
  	S4_CS_ES: { type: 'boolean', defaultsTo: false },


  	////////////////////////////
  	// SECTION 5
  	////////////////////////////
  	S5_ZC_CA: { type: 'boolean', defaultsTo: false },
  	S5_ZC_CA_DESCRIPTION: 'STRING',
  	S5_SR_RS: { type: 'boolean', defaultsTo: false },
  	S5_SR_RS_DESCRIPTION: 'STRING',
  	S5_RA_AH: { type: 'boolean', defaultsTo: false },
  	S5_RA_AH_DESCRIPTION: 'STRING',
  	S5_AU_OT: { type: 'boolean', defaultsTo: false },
  	S5_AU_OT_DESCRIPTION: 'STRING',
  	S5_GI_IG: { type: 'boolean', defaultsTo: false },
  	S5_GI_IG_DESCRIPTION: 'STRING',
  	S5_RS_UH: { type: 'boolean', defaultsTo: false },
  	S5_RS_UH_DESCRIPTION: 'STRING',
  	S5_AM_AS: { type: 'boolean', defaultsTo: false },
  	S5_AM_AS_DESCRIPTION: 'STRING',
  	S5_AE_OR_DESCRIPTION: 'STRING',



  	////////////////////////////
  	// SECTION 7
  	////////////////////////////
  	S7_AE_OR_DESCRIPTION: 'STRING',
  	S7_HEURE: 'STRING',


  	////////////////////////////
  	// SECTION 7
  	////////////////////////////
  	S8_USERNAME: 'STRING',
  	S8_DETENTEUR1: 'STRING',
  	S8_DETENTEUR2: 'STRING',
  	S8_DETENTEUR3: 'STRING',
  	S8_DETENTEUR4: 'STRING',
  	S8_HEURE: 'STRING',
  	S8_TRAVAIL_COMPLETE: { type: 'boolean', defaultsTo: false },
  	S8_PERMIS_A_RENOUVELER: { type: 'boolean', defaultsTo: false },
  	S1_Type_IN: { type: 'boolean', defaultsTo: false },
  	S1_Type_AC: { type: 'boolean', defaultsTo: false },
  	S1_Type_AF: { type: 'boolean', defaultsTo: false },
  	S1_Type_TR: { type: 'boolean', defaultsTo: false },
  	cadenas: 'STRING',


    toJSON: function () {
      var obj = this;

      for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] === -1) {
          obj[prop] = true;
        }
      }

      return obj;
    },

  }
};















