import * as _pi from 'pareto-core/dist/interface'


import * as d_json from "pareto-json/dist/interface/to_be_generated/json_with_parse_info"

export type Schema =
    | ['boolean', boolean]
    | ['object', Schema_Object]

export type Schema_Object = {

    /******** core ********/
    '$id': _pi.Optional_Value<string>
    '$schema': _pi.Optional_Value<string>
    '$ref': _pi.Optional_Value<string>
    '$anchor': _pi.Optional_Value<string>
    '$dynamicRef': _pi.Optional_Value<string>
    '$dynamicAnchor': _pi.Optional_Value<string>
    '$vocabulary': _pi.Optional_Value<_pi.Dictionary<boolean>>
    '$comment': _pi.Optional_Value<string>
    '$defs': _pi.Optional_Value<_pi.Dictionary<Schema>>

    /******** applicator********/
    'prefixItems': _pi.Optional_Value<Schema_Array>
    'items': _pi.Optional_Value<Schema>
    'contains': _pi.Optional_Value<Schema>
    'additionalProperties': _pi.Optional_Value<Schema>
    'properties': _pi.Optional_Value<Properties>
    'patternProperties': _pi.Optional_Value<_pi.Dictionary<Schema>>
    'dependentSchemas': _pi.Optional_Value<_pi.Dictionary<Schema>>
    'propertyNames': _pi.Optional_Value<Schema>
    'if': _pi.Optional_Value<Schema>
    'then': _pi.Optional_Value<Schema>
    'else': _pi.Optional_Value<Schema>
    'oneOf': _pi.Optional_Value<Schema_Array>
    'allOf': _pi.Optional_Value<Schema_Array>
    'anyOf': _pi.Optional_Value<Schema_Array>
    //not

    /******** unevaluated ********/
    'unevaluatedItems': _pi.Optional_Value<Schema>
    'unevaluatedProperties': _pi.Optional_Value<Schema>

    /******** validation ********/
    'type': _pi.Optional_Value<Type>
    'const': _pi.Optional_Value<d_json.Value>
    'enum': _pi.Optional_Value<_pi.List<d_json.Value>>
    'multipleOf': _pi.Optional_Value<number>
    'maximum': _pi.Optional_Value<number>
    'exclusiveMaximum': _pi.Optional_Value<number>
    'minimum': _pi.Optional_Value<number>
    'exclusiveMinimum': _pi.Optional_Value<number>
    'maxLength': _pi.Optional_Value<number>
    'minLength': _pi.Optional_Value<number>
    'pattern': _pi.Optional_Value<string>
    'maxItems': _pi.Optional_Value<number>
    'minItems': _pi.Optional_Value<number>
    'uniqueItems': _pi.Optional_Value<boolean>
    'maxContains': _pi.Optional_Value<number>
    'minContains': _pi.Optional_Value<number>
    'maxProperties': _pi.Optional_Value<number>
    'minProperties': _pi.Optional_Value<number>
    'required': _pi.Optional_Value<String_Array>
    'dependentRequired': _pi.Optional_Value<_pi.Dictionary<String_Array>>

    /******** meta-data********/
    'title': _pi.Optional_Value<string>
    'description': _pi.Optional_Value<string>
    'default': _pi.Optional_Value<d_json.Value>
    'deprecated': _pi.Optional_Value<boolean>
    'readOnly': _pi.Optional_Value<boolean>
    'writeOnly': _pi.Optional_Value<boolean>
    'examples': _pi.Optional_Value<_pi.List<d_json.Value>>

    /******** format-annotation ********/
    'format': _pi.Optional_Value<string>

    /******** content********/
    'contentEncoding': _pi.Optional_Value<string>
    'contentMediaType': _pi.Optional_Value<string>
    'contentSchema': _pi.Optional_Value<Schema>

    /******** deprecated********/
    'definitions': _pi.Optional_Value<_pi.Dictionary<Schema>>
    'dependencies': _pi.Optional_Value<_pi.Dictionary<
        | ['schema', Schema]
        | ['array', String_Array]
    >>
    '$recursiveAnchor': _pi.Optional_Value<string>
    '$recursiveRef': _pi.Optional_Value<string>
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