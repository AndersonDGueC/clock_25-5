import {INC_SESS, INC_BREK, DEC_SESS, DEC_BREK, COUNT_BACK, CONFIG_BR, CONFIG_SS, START, STOP, RESET} from './actionTypeClock'

export const inc_ses_click=()=>({type:INC_SESS});

export const inc_brek_click=()=>({type:INC_BREK});

export const dec_sess_click=()=>({type:DEC_SESS});

export const dec_brek_click=()=>({type:DEC_BREK});

export const start_click=()=>({type:START});

export const stop_click=()=>({type:STOP});

export const count_back_click=()=>({type:COUNT_BACK});

export const config_break=()=>({type:CONFIG_BR});

export const config_session=()=>({type:CONFIG_SS});

export const reset_click=()=>({type:RESET})
