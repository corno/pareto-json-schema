import * as p_di from 'pareto-core/dist/interface/data'


import * as d_json from "pareto-json/dist/interface/data/json_with_parse_info"

export type Schema =
    | ['boolean', boolean]
    | ['object', Schema_Object]

export type Schema_Object = {

    /******** core ********/
    '$id': p_di.Optional_Value<string>
    '$schema': p_di.Optional_Value<string>
    '$ref': p_di.Optional_Value<string>
    '$anchor': p_di.Optional_Value<string>
    '$dynamicRef': p_di.Optional_Value<string>
    '$dynamicAnchor': p_di.Optional_Value<string>
    '$vocabulary': p_di.Optional_Value<p_di.Dictionary<boolean>>
    '$comment': p_di.Optional_Value<string>
    '$defs': p_di.Optional_Value<p_di.Dictionary<Schema>>

    /******** applicator********/
    'prefixItems': p_di.Optional_Value<Schema_Array>
    'items': p_di.Optional_Value<Schema>
    'contains': p_di.Optional_Value<Schema>
    'additionalProperties': p_di.Optional_Value<Schema>
    'properties': p_di.Optional_Value<Properties>
    'patternProperties': p_di.Optional_Value<p_di.Dictionary<Schema>>
    'dependentSchemas': p_di.Optional_Value<p_di.Dictionary<Schema>>
    'propertyNames': p_di.Optional_Value<Schema>
    'if': p_di.Optional_Value<Schema>
    'then': p_di.Optional_Value<Schema>
    'else': p_di.Optional_Value<Schema>
    'oneOf': p_di.Optional_Value<Schema_Array>
    'allOf': p_di.Optional_Value<Schema_Array>
    'anyOf': p_di.Optional_Value<Schema_Array>
    'not': p_di.Optional_Value<Schema>

    /******** unevaluated ********/
    'unevaluatedItems': p_di.Optional_Value<Schema>
    'unevaluatedProperties': p_di.Optional_Value<Schema>

    /******** validation ********/
    'type': p_di.Optional_Value<Type>
    'const': p_di.Optional_Value<d_json.Value>
    'enum': p_di.Optional_Value<p_di.List<d_json.Value>>
    'multipleOf': p_di.Optional_Value<number>
    'maximum': p_di.Optional_Value<number>
    'exclusiveMaximum': p_di.Optional_Value<number>
    'minimum': p_di.Optional_Value<number>
    'exclusiveMinimum': p_di.Optional_Value<number>
    'maxLength': p_di.Optional_Value<number>
    'minLength': p_di.Optional_Value<number>
    'pattern': p_di.Optional_Value<string>
    'maxItems': p_di.Optional_Value<number>
    'minItems': p_di.Optional_Value<number>
    'uniqueItems': p_di.Optional_Value<boolean>
    'maxContains': p_di.Optional_Value<number>
    'minContains': p_di.Optional_Value<number>
    'maxProperties': p_di.Optional_Value<number>
    'minProperties': p_di.Optional_Value<number>
    'required': p_di.Optional_Value<String_Array>
    'dependentRequired': p_di.Optional_Value<p_di.Dictionary<String_Array>>

    /******** meta-data********/
    'title': p_di.Optional_Value<string>
    'description': p_di.Optional_Value<string>
    'default': p_di.Optional_Value<d_json.Value>
    'deprecated': p_di.Optional_Value<boolean>
    'readOnly': p_di.Optional_Value<boolean>
    'writeOnly': p_di.Optional_Value<boolean>
    'examples': p_di.Optional_Value<p_di.List<d_json.Value>>

    /******** format-annotation ********/
    'format': p_di.Optional_Value<string>

    /******** content********/
    'contentEncoding': p_di.Optional_Value<string>
    'contentMediaType': p_di.Optional_Value<string>
    'contentSchema': p_di.Optional_Value<Schema>

    /******** deprecated********/
    'definitions': p_di.Optional_Value<p_di.Dictionary<Schema>>
    'dependencies': p_di.Optional_Value<p_di.Dictionary<
        | ['schema', Schema]
        | ['array', String_Array]
    >>
    '$recursiveAnchor': p_di.Optional_Value<string>
    '$recursiveRef': p_di.Optional_Value<string>
}

export type Properties = p_di.Dictionary<Schema>

export type Type =
    | ['array', p_di.List<Simple_Types>]
    | ['single', Simple_Types]

export type String_Array = p_di.List<string>

export type Schema_Array = p_di.List<Schema>

export type Simple_Types =
    | ['array', null]
    | ['boolean', null]
    | ['null', null]
    | ['number', null]
    | ['object', null]
    | ['string', null]