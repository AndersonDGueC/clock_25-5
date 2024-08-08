import {INC_SESS, INC_BREK, DEC_SESS, DEC_BREK, START_STOP, RESET} from './actionTypeClock'

export const inc_ses_click=()=>({type:INC_SESS, flag_incb:true});

export const inc_brek_click=()=>({type:INC_BREK, flag_decb:true});

export const dec_sess_click=()=>({type:DEC_SESS, flag_decs:true});

export const dec_brek_click=()=>({type:DEC_BREK, flag_incs:true});

export const start_stop_click=()=>({type:START_STOP, flag_active:true});

export const reset_click=()=>({type:RESET})
