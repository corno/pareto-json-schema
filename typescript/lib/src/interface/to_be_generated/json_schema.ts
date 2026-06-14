import * as pi from 'pareto-core/dist/interface'


import * as d_json from "pareto-json/dist/interface/to_be_generated/json_with_parse_info"

export type Schema =
    | ['boolean', boolean]
    | ['object', Schema_Object]

export type Schema_Object = {

    /******** core ********/
    '$id': pi.Optional_Value<string>
    '$schema': pi.Optional_Value<string>
    '$ref': pi.Optional_Value<string>
    '$anchor': pi.Optional_Value<string>
    '$dynamicRef': pi.Optional_Value<string>
    '$dynamicAnchor': pi.Optional_Value<string>
    '$vocabulary': pi.Optional_Value<pi.Dictionary<boolean>>
    '$comment': pi.Optional_Value<string>
    '$defs': pi.Optional_Value<pi.Dictionary<Schema>>

    /******** applicator********/
    'prefixItems': pi.Optional_Value<Schema_Array>
    'items': pi.Optional_Value<Schema>
    'contains': pi.Optional_Value<Schema>
    'additionalProperties': pi.Optional_Value<Schema>
    'properties': pi.Optional_Value<Properties>
    'patternProperties': pi.Optional_Value<pi.Dictionary<Schema>>
    'dependentSchemas': pi.Optional_Value<pi.Dictionary<Schema>>
    'propertyNames': pi.Optional_Value<Schema>
    'if': pi.Optional_Value<Schema>
    'then': pi.Optional_Value<Schema>
    'else': pi.Optional_Value<Schema>
    'oneOf': pi.Optional_Value<Schema_Array>
    'allOf': pi.Optional_Value<Schema_Array>
    'anyOf': pi.Optional_Value<Schema_Array>
    'not': pi.Optional_Value<Schema>

    /******** unevaluated ********/
    'unevaluatedItems': pi.Optional_Value<Schema>
    'unevaluatedProperties': pi.Optional_Value<Schema>

    /******** validation ********/
    'type': pi.Optional_Value<Type>
    'const': pi.Optional_Value<d_json.Value>
    'enum': pi.Optional_Value<pi.List<d_json.Value>>
    'multipleOf': pi.Optional_Value<number>
    'maximum': pi.Optional_Value<number>
    'exclusiveMaximum': pi.Optional_Value<number>
    'minimum': pi.Optional_Value<number>
    'exclusiveMinimum': pi.Optional_Value<number>
    'maxLength': pi.Optional_Value<number>
    'minLength': pi.Optional_Value<number>
    'pattern': pi.Optional_Value<string>
    'maxItems': pi.Optional_Value<number>
    'minItems': pi.Optional_Value<number>
    'uniqueItems': pi.Optional_Value<boolean>
    'maxContains': pi.Optional_Value<number>
    'minContains': pi.Optional_Value<number>
    'maxProperties': pi.Optional_Value<number>
    'minProperties': pi.Optional_Value<number>
    'required': pi.Optional_Value<String_Array>
    'dependentRequired': pi.Optional_Value<pi.Dictionary<String_Array>>

    /******** meta-data********/
    'title': pi.Optional_Value<string>
    'description': pi.Optional_Value<string>
    'default': pi.Optional_Value<d_json.Value>
    'deprecated': pi.Optional_Value<boolean>
    'readOnly': pi.Optional_Value<boolean>
    'writeOnly': pi.Optional_Value<boolean>
    'examples': pi.Optional_Value<pi.List<d_json.Value>>

    /******** format-annotation ********/
    'format': pi.Optional_Value<string>

    /******** content********/
    'contentEncoding': pi.Optional_Value<string>
    'contentMediaType': pi.Optional_Value<string>
    'contentSchema': pi.Optional_Value<Schema>

    /******** deprecated********/
    'definitions': pi.Optional_Value<pi.Dictionary<Schema>>
    'dependencies': pi.Optional_Value<pi.Dictionary<
        | ['schema', Schema]
        | ['array', String_Array]
    >>
    '$recursiveAnchor': pi.Optional_Value<string>
    '$recursiveRef': pi.Optional_Value<string>
}

export type Properties = pi.Dictionary<Schema>

export type Type =
    | ['array', pi.List<Simple_Types>]
    | ['single', Simple_Types]

export type String_Array = pi.List<string>

export type Schema_Array = pi.List<Schema>

export type Simple_Types =
    | ['array', null]
    | ['boolean', null]
    | ['null', null]
    | ['number', null]
    | ['object', null]
    | ['string', null]