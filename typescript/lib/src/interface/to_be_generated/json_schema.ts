import * as _pi from 'pareto-core/dist/interface'


import * as d_json from "pareto-json/dist/interface/to_be_generated/json_with_parse_info"

export type Schema =
    | ['boolean', null]
    | ['object', Schema_Object]

export type Schema_Object = {
    '$id': _pi.Optional_Value<string>
    '$defs': _pi.Optional_Value<_pi.Dictionary<Schema>>
    '$ref': _pi.Optional_Value<string>
    '$schema': _pi.Optional_Value<string>
    'additionalProperties': _pi.Optional_Value<Schema>
    'const': _pi.Optional_Value<d_json.Value>
    'maxProperties': _pi.Optional_Value<number>
    'minLength': _pi.Optional_Value<number>
    'minProperties': _pi.Optional_Value<number>
    'properties': _pi.Optional_Value<Properties>
    'required': _pi.Optional_Value<String_Array>
    'title': _pi.Optional_Value<string>
    'type': _pi.Optional_Value<Type>
    'uniqueItems': _pi.Optional_Value<boolean>
    'oneOf': _pi.Optional_Value<Schema_Array>
    'allOf': _pi.Optional_Value<Schema_Array>
    'anyOf': _pi.Optional_Value<Schema_Array>
}

export type Properties = _pi.Dictionary<Schema>

export type Type =
    | ['array', _pi.List<Simple_Types>]
    | ['single', Simple_Types]

export type String_Array = _pi.List<string>

export type Schema_Array = _pi.List<Schema>

export type Simple_Types =
    | ['array', null]
    | ['boolean', null]
    | ['null', null]
    | ['number', null]
    | ['object', null]
    | ['string', null]