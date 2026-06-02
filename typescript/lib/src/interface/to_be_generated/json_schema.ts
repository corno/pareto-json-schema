import * as _pi from 'pareto-core/dist/interface'


import * as d_json from "pareto-json/dist/interface/generated/liana/schemas/json/data"

export type Schema = {
    'const': _pi.Optional_Value<d_json.Value>
    'type': _pi.Optional_Value<Type>
}

export type Type =
    | ['array', _pi.List<Primitive>]
    | ['single', Primitive]

export type Primitive =
    | ['array', null]
    | ['boolean', null]
    | ['null', null]
    | ['number', null]
    | ['object', null]
    | ['string', null]