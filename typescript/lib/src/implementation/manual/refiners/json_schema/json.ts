import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_cc from 'pareto-core/dist/_p_change_context'

import * as d_in from "pareto-json/dist/interface/to_be_generated/json_with_parse_info"
import * as d_out from "../../../../interface/to_be_generated/json_schema"
import * as d_function from "pareto-json/dist/interface/to_be_generated/unmarshalled_from_json"

//dependencies
import * as r_json_y from "pareto-json/dist/implementation/manual/refiners/json_y/json_with_parse_info"
import * as r_json_x from "pareto-json/dist/implementation/manual/refiners/json_x/json_with_parse_info"


export const Schema: _pi.Refiner<
    d_out.Schema,
    d_function.Error,
    d_in.Value
> = ($, abort) => {
    const range = $.range
    return _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => ['boolean', $.value])
            case 'object': return _p.ss($, ($): d_out.Schema => ['object', _p_cc(
                r_json_x.Object_No_Unexpected_Properties_From_Object( //okay for now, but the JSON schema spec allows additional properties
                    $,
                    abort,
                    {
                        'expected properties': _p.dictionary.literal({

                            //core
                            "$id": null,
                            "$schema": null,
                            "$ref": null,   
                            "$anchor": null,
                            "$dynamicRef": null,
                            "$dynamicAnchor": null,
                            "$vocabulary": null,
                            "$comment": null,
                            "$defs": null,
                            //applicator
                            "prefixItems": null,
                            "items": null,
                            "contains": null,
                            "additionalProperties": null,
                            "properties": null,
                            "patternProperties": null,
                            "dependentSchemas": null,
                            "propertyNames": null,
                            "if": null,
                            "then": null,
                            "else": null,
                            "oneOf": null,
                            "allOf": null,
                            "anyOf": null,
                            "not": null,
                            //unevaluated
                            "unevaluatedItems": null,
                            "unevaluatedProperties": null,
                            //validation
                            "type": null,
                            "const": null,
                            "enum": null,
                            "multipleOf": null,
                            "maximum": null,
                            "exclusiveMaximum": null,
                            "minimum": null,
                            "exclusiveMinimum": null,
                            "maxLength": null,
                            "minLength": null,
                            "pattern": null,
                            "maxItems": null,
                            "minItems": null,
                            "uniqueItems": null,
                            "maxContains": null,
                            "minContains": null,
                            "maxProperties": null,
                            "minProperties": null,
                            "required": null,
                            "dependentRequired": null,
                            //meta-data
                            "title": null,
                            "description": null,
                            "default": null,
                            "deprecated": null,
                            "readOnly": null,
                            "writeOnly": null,
                            "examples": null,
                            //format-annotation
                            "format": null,
                            //content
                            "contentEncoding": null,
                            "contentMediaType": null,
                            "contentSchema": null,
                            //deprecated
                            "definitions": null,
                            "dependencies": null,
                            "$recursiveAnchor": null,
                            "$recursiveRef": null,


                        })
                    }
                ),
                ($): d_out.Schema_Object => ({

                    /******** core ********/

                    '$id': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$id")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$schema': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$schema")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$ref': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$ref")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$anchor': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$anchor")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$dynamicRef': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$dynamicRef")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$dynamicAnchor': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$dynamicAnchor")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$vocabulary': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$vocabulary")
                    ).map(($) => _p_cc(
                        r_json_y.Object_With_Unique_Keys(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => r_json_x.Boolean($.value, abort).value)
                    )),

                    '$comment': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$comment")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$defs': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$defs")
                    ).map(($) => _p_cc(
                        r_json_y.Object_With_Unique_Keys(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    /******** applicator ********/

                    'prefixItems': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("prefixItems")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'items': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("items")
                    ).map(($) => Schema($.value, abort)),

                    'contains': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("contains")
                    ).map(($) => Schema($.value, abort)),

                    'additionalProperties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("additionalProperties")
                    ).map(($) => Schema($.value, abort)),

                    'properties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("properties")
                    ).map(($) => _p_cc(
                        r_json_y.Object_With_Unique_Keys(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    'patternProperties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("patternProperties")
                    ).map(($) => _p_cc(
                        r_json_y.Object_With_Unique_Keys(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    'dependentSchemas': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("dependentSchemas")
                    ).map(($) => _p_cc(
                        r_json_y.Object_With_Unique_Keys(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    'propertyNames': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("propertyNames")
                    ).map(($) => Schema($.value, abort)),

                    'if': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("if")
                    ).map(($) => Schema($.value, abort)),

                    'then': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("then")
                    ).map(($) => Schema($.value, abort)),

                    'else': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("else")
                    ).map(($) => Schema($.value, abort)),

                    'oneOf': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("oneOf")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'anyOf': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("anyOf")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'allOf': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("allOf")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'not': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("not")
                    ).map(($) => Schema($.value, abort)),

                    /******** unevaluated ********/

                    'unevaluatedItems': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("unevaluatedItems")
                    ).map(($) => Schema($.value, abort)),

                    'unevaluatedProperties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("unevaluatedProperties")
                    ).map(($) => Schema($.value, abort)),

                    /******** validation ********/

                    'type': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("type")
                    ).map(($): d_out.Type => _p.decide.state($.value.type, ($) => {
                        switch ($[0]) {
                            case 'string': return _p.ss($, ($) => ['single', Simple_Types($, abort)])
                            case 'array': return _p.ss($, ($) => ['array', $.items.__l_map(($) => Simple_Types(r_json_x.String($, abort), abort))])
                            default: return abort({
                                'type': ['unexpected type', {
                                    'expected': _p.list.literal(['string', 'array'])
                                }],
                                'range': range,
                            })
                        }
                    })),

                    'const': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("const")
                    ).map(($) => $.value),

                    'enum': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("enum")
                    ).map(($) => r_json_x.Array($.value, abort).items),

                    'multipleOf': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("multipleOf")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'maximum': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maximum")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'exclusiveMaximum': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("exclusiveMaximum")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minimum': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minimum")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'exclusiveMinimum': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("exclusiveMinimum")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'maxLength': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maxLength")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minLength': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minLength")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'pattern': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("pattern")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'maxItems': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maxItems")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minItems': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minItems")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'uniqueItems': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("uniqueItems")
                    ).map(($) => r_json_x.Boolean($.value, abort).value),

                    'maxContains': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maxContains")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minContains': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minContains")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'maxProperties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maxProperties")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minProperties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minProperties")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'required': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("required")
                    ).map(($) => String_Array(r_json_x.Array($.value, abort), abort)),

                    'dependentRequired': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("dependentRequired")
                    ).map(($) => _p_cc(
                        r_json_y.Object_With_Unique_Keys(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => String_Array(r_json_x.Array($.value, abort), abort))
                    )),

                    /******** meta-data ********/

                    'title': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("title")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'description': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("description")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'default': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("default")
                    ).map(($) => $.value),

                    'deprecated': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("deprecated")
                    ).map(($) => r_json_x.Boolean($.value, abort).value),

                    'readOnly': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("readOnly")
                    ).map(($) => r_json_x.Boolean($.value, abort).value),

                    'writeOnly': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("writeOnly")
                    ).map(($) => r_json_x.Boolean($.value, abort).value),

                    'examples': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("examples")
                    ).map(($) => r_json_x.Array($.value, abort).items),

                    /******** format-annotation ********/

                    'format': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("format")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    /******** content ********/

                    'contentEncoding': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("contentEncoding")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'contentMediaType': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("contentMediaType")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'contentSchema': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("contentSchema")
                    ).map(($) => Schema($.value, abort)),

                    /******** deprecated ********/
                    'definitions': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("definitions")
                    ).map(($) => _p_cc(
                        r_json_y.Object_With_Unique_Keys(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    'dependencies': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("dependencies")
                    ).map(($) => _p_cc(
                        r_json_y.Object_With_Unique_Keys(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => {
                            const x = $
                            return _p.decide.state($.value.type, ($) => {
                                switch ($[0]) {
                                    case 'array': return _p.ss($, ($) => ['array', String_Array($, abort)])
                                    default: return ['schema', Schema(x.value, abort)]
                                }
                            })
                        })
                    )),

                    '$recursiveAnchor': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$recursiveAnchor")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$recursiveRef': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$recursiveRef")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                })
            )])
            default: return abort({
                'type': ['unexpected type', {
                    'expected': _p.list.literal(['boolean', 'object'])
                }],
                'range': range,
            })
        }
    })
}

export const Schema_Array: _pi.Refiner<
    d_out.Schema_Array,
    d_function.Error,
    d_in.Array
> = ($, abort) => $.items.__l_map(($) => Schema($, abort))

export const String_Array: _pi.Refiner<
    d_out.String_Array,
    d_function.Error,
    d_in.Array
> = ($, abort) => $.items.__l_map(($) => r_json_x.String($, abort).token.value)

export const Simple_Types: _pi.Refiner<
    d_out.Simple_Types,
    d_function.Error,
    d_in.String
> = ($, abort) => {
    switch ($.token.value) {
        case "string": return ['string', null]
        case "number": return ['number', null]
        case "boolean": return ['boolean', null]
        case "object": return ['object', null]
        case "array": return ['array', null]
        case "null": return ['null', null]
        default: return abort({
            'type': ['unexpected enum value', {
                'expected': _p.list.literal(['string', 'number', 'boolean', 'object', 'array', 'null'])
            }],
            'range': $.range,
        })
    }
}