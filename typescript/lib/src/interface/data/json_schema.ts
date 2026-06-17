import * as p_ from 'pareto-core/dist/interface/data'


import * as d_json from "pareto-json/dist/interface/data/json_with_parse_info"

export type Schema =
    | ['boolean', boolean]
    | ['object', Schema_Object]

export type Schema_Object = {

    /******** core ********/
    '$id': p_.Optional_Value<string>
    '$schema': p_.Optional_Value<string>
    '$ref': p_.Optional_Value<string>
    '$anchor': p_.Optional_Value<string>
    '$dynamicRef': p_.Optional_Value<string>
    '$dynamicAnchor': p_.Optional_Value<string>
    '$vocabulary': p_.Optional_Value<p_.Dictionary<boolean>>
    '$comment': p_.Optional_Value<string>
    '$defs': p_.Optional_Value<p_.Dictionary<Schema>>

    /******** applicator********/
    'prefixItems': p_.Optional_Value<Schema_Array>
    'items': p_.Optional_Value<Schema>
    'contains': p_.Optional_Value<Schema>
    'additionalProperties': p_.Optional_Value<Schema>
    'properties': p_.Optional_Value<Properties>
    'patternProperties': p_.Optional_Value<p_.Dictionary<Schema>>
    'dependentSchemas': p_.Optional_Value<p_.Dictionary<Schema>>
    'propertyNames': p_.Optional_Value<Schema>
    'if': p_.Optional_Value<Schema>
    'then': p_.Optional_Value<Schema>
    'else': p_.Optional_Value<Schema>
    'oneOf': p_.Optional_Value<Schema_Array>
    'allOf': p_.Optional_Value<Schema_Array>
    'anyOf': p_.Optional_Value<Schema_Array>
    'not': p_.Optional_Value<Schema>

    /******** unevaluated ********/
    'unevaluatedItems': p_.Optional_Value<Schema>
    'unevaluatedProperties': p_.Optional_Value<Schema>

    /******** validation ********/
    'type': p_.Optional_Value<Type>
    'const': p_.Optional_Value<d_json.Value>
    'enum': p_.Optional_Value<p_.List<d_json.Value>>
    'multipleOf': p_.Optional_Value<number>
    'maximum': p_.Optional_Value<number>
    'exclusiveMaximum': p_.Optional_Value<number>
    'minimum': p_.Optional_Value<number>
    'exclusiveMinimum': p_.Optional_Value<number>
    'maxLength': p_.Optional_Value<number>
    'minLength': p_.Optional_Value<number>
    'pattern': p_.Optional_Value<string>
    'maxItems': p_.Optional_Value<number>
    'minItems': p_.Optional_Value<number>
    'uniqueItems': p_.Optional_Value<boolean>
    'maxContains': p_.Optional_Value<number>
    'minContains': p_.Optional_Value<number>
    'maxProperties': p_.Optional_Value<number>
    'minProperties': p_.Optional_Value<number>
    'required': p_.Optional_Value<String_Array>
    'dependentRequired': p_.Optional_Value<p_.Dictionary<String_Array>>

    /******** meta-data********/
    'title': p_.Optional_Value<string>
    'description': p_.Optional_Value<string>
    'default': p_.Optional_Value<d_json.Value>
    'deprecated': p_.Optional_Value<boolean>
    'readOnly': p_.Optional_Value<boolean>
    'writeOnly': p_.Optional_Value<boolean>
    'examples': p_.Optional_Value<p_.List<d_json.Value>>

    /******** format-annotation ********/
    'format': p_.Optional_Value<string>

    /******** content********/
    'contentEncoding': p_.Optional_Value<string>
    'contentMediaType': p_.Optional_Value<string>
    'contentSchema': p_.Optional_Value<Schema>

    /******** deprecated********/
    'definitions': p_.Optional_Value<p_.Dictionary<Schema>>
    'dependencies': p_.Optional_Value<p_.Dictionary<
        | ['schema', Schema]
        | ['array', String_Array]
    >>
    '$recursiveAnchor': p_.Optional_Value<string>
    '$recursiveRef': p_.Optional_Value<string>
}

export type Properties = p_.Dictionary<Schema>

export type Type =
    | ['array', p_.List<Simple_Types>]
    | ['single', Simple_Types]

export type String_Array = p_.List<string>

export type Schema_Array = p_.List<Schema>

export type Simple_Types =
    | ['array', null]
    | ['boolean', null]
    | ['null', null]
    | ['number', null]
    | ['object', null]
    | ['string', null]