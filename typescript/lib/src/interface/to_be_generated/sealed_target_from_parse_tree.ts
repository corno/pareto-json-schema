export type Error = {
    // 'path': string
    'type': 
    | ['not the right type', {
        'expected': Expected_Value_Type
        'actual': Found_Value_Type
    }]
    | ['type not allowed', {
        'type': Found_Value_Type
    }]
    | ['missing property', string]
    | ['superfluous property', {
        'name': string
        'type': Found_Value_Type
    }]
}

export type Expected_Value_Type =
    | ['array', null]
    | ['boolean', null]
    | ['null', null]
    | ['number', null]
    | ['object', null]
    | ['string', null]

export type Found_Value_Type =
    | ['missing', null]
    | ['include', null]
    | ['list', null]
    | ['text', null]
    | ['nothing', null]
    | ['optional', null]
    | ['dictionary', null]
    | ['group', null]
    | ['state', null]
