import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_cc from 'pareto-core/dist/_p_change_context'

import * as d_in from "pareto-json/dist/interface/to_be_generated/json_with_parse_info"
import * as d_out from "../../../../interface/to_be_generated/json_schema"
import * as d_function from "pareto-json/dist/interface/to_be_generated/unmarshalled_from_json"

import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"

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
            case 'boolean': return _p.ss($, ($) => ['boolean', null])
            case 'object': return _p.ss($, ($): d_out.Schema => ['object', _p_cc(
                r_json_x.Object_No_Unexpected_Properties_From_Object( //okay for now, but the JSON schema spec allows additional properties
                    $,
                    abort,
                    {
                        'expected properties': _p.dictionary.literal({
                            "$id": null,
                            "$defs": null,
                            "$schema": null,
                            "additionalProperties": null,
                            "const": null,
                            "maxProperties": null,
                            "minLength": null,
                            "minProperties": null,
                            "properties": null,
                            "title": null,
                            "type": null,
                            "uniqueItems": null,
                            "oneOf": null,
                            "allOf": null,
                            "anyOf": null,
                            "required": null,
                        })
                    }
                ),
                ($): d_out.Schema_Object => ({

                    '$id': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$id")
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

                    '$ref': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$ref")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    '$schema': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("$schema")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

                    'additionalProperties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("additionalProperties")
                    ).map(($) => Schema($.value, abort)),

                    'const': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("const")
                    ).map(($) => $.value),

                    'maxProperties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("maxProperties")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minLength': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minLength")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'minProperties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("minProperties")
                    ).map(($) => r_json_x.Number($.value, abort).value),

                    'properties': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("properties")
                    ).map(($) => _p_cc(
                        r_json_y.Object_With_Unique_Keys(
                            r_json_x.Object($.value, abort),
                            abort
                        ),
                        ($) => $.properties.__d_map(($) => Schema($.value, abort))
                    )),

                    'title': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("title")
                    ).map(($) => r_json_x.String($.value, abort).token.value),

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

                    'uniqueItems': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("uniqueItems")
                    ).map(($) => r_json_x.Boolean($.value, abort).value),

                    'required': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("required")
                    ).map(($) => String_Array(r_json_x.Array($.value, abort), abort)),

                    'oneOf': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("oneOf")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'anyOf': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("anyOf")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

                    'allOf': _p.optional.from.optional(
                        $.properties.__get_possible_entry_deprecated("allOf")
                    ).map(($) => Schema_Array(r_json_x.Array($.value, abort), abort)),

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