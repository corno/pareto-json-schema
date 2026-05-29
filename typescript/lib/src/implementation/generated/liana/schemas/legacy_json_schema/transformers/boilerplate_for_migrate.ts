
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/legacy_json_schema/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/legacy_json_schema/data"

export const Array_Definition: t_signatures.Array_Definition = ($) => ({
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Array_Definition.type_ => {
                switch ($[0]) {
                    case 'list':
                        return _p.ss(
                            $,
                            ($) => ['list', Definition(
                                $,
                            )],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const Boolean_Definition: t_signatures.Boolean_Definition = ($) => null

export const Null_Definition: t_signatures.Null_Definition = ($) => null

export const Number_Definition: t_signatures.Number_Definition = ($) => null

export const Object_Definition: t_signatures.Object_Definition = ($) => ({
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Object_Definition.type_ => {
                switch ($[0]) {
                    case 'verbose group':
                        return _p.ss(
                            $,
                            ($) => ['verbose group', {
                                'properties': _p_change_context(
                                    $['properties'],
                                    ($) => _p.dictionary.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ({
                                            'definition': _p_change_context(
                                                $['definition'],
                                                ($) => Definition(
                                                    $,
                                                ),
                                            ),
                                            'optional': _p_change_context(
                                                $['optional'],
                                                ($) => $,
                                            ),
                                        }),
                                    ),
                                ),
                            }],
                        )
                    case 'dictionary':
                        return _p.ss(
                            $,
                            ($) => ['dictionary', Definition(
                                $,
                            )],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const String_Definition: t_signatures.String_Definition = ($) => _p.decide.state(
    $,
    ($): t_out.String_Definition => {
        switch ($[0]) {
            case 'any':
                return _p.ss(
                    $,
                    ($) => ['any', null],
                )
            case 'enum':
                return _p.ss(
                    $,
                    ($) => ['enum', _p.dictionary.from.dictionary(
                        $,
                    ).map(
                        ($, id) => null,
                    )],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

export const Definition: t_signatures.Definition = ($) => _p.decide.state(
    $,
    ($): t_out.Definition => {
        switch ($[0]) {
            case 'any':
                return _p.ss(
                    $,
                    ($) => ['any', null],
                )
            case 'any of':
                return _p.ss(
                    $,
                    ($) => ['any of', {
                        'array': _p_change_context(
                            $['array'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Array_Definition(
                                    $,
                                ),
                            ),
                        ),
                        'boolean': _p_change_context(
                            $['boolean'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Boolean_Definition(
                                    $,
                                ),
                            ),
                        ),
                        'null': _p_change_context(
                            $['null'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Null_Definition(
                                    $,
                                ),
                            ),
                        ),
                        'number': _p_change_context(
                            $['number'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Number_Definition(
                                    $,
                                ),
                            ),
                        ),
                        'object': _p_change_context(
                            $['object'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Object_Definition(
                                    $,
                                ),
                            ),
                        ),
                        'string': _p_change_context(
                            $['string'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => String_Definition(
                                    $,
                                ),
                            ),
                        ),
                        'else': _p_change_context(
                            $['else'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => $,
                            ),
                        ),
                    }],
                )
            case 'definition reference':
                return _p.ss(
                    $,
                    ($) => ['definition reference', $],
                )
            case 'array':
                return _p.ss(
                    $,
                    ($) => ['array', Array_Definition(
                        $,
                    )],
                )
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ['boolean', Boolean_Definition(
                        $,
                    )],
                )
            case 'null':
                return _p.ss(
                    $,
                    ($) => ['null', Null_Definition(
                        $,
                    )],
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ['number', Number_Definition(
                        $,
                    )],
                )
            case 'object':
                return _p.ss(
                    $,
                    ($) => ['object', Object_Definition(
                        $,
                    )],
                )
            case 'string':
                return _p.ss(
                    $,
                    ($) => ['string', String_Definition(
                        $,
                    )],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

export const Schema: t_signatures.Schema = ($) => ({
    'definitions': _p_change_context(
        $['definitions'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => Definition(
                $,
            ),
        ),
    ),
    'root': _p_change_context(
        $['root'],
        ($) => $,
    ),
})

export const Error: t_signatures.Error = ($) => ({
    'path': _p_change_context(
        $['path'],
        ($) => $,
    ),
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Error.type_ => {
                switch ($[0]) {
                    case 'not the right type':
                        return _p.ss(
                            $,
                            ($) => ['not the right type', {
                                'expected': _p_change_context(
                                    $['expected'],
                                    ($) => Value_Type(
                                        $,
                                    ),
                                ),
                                'actual': _p_change_context(
                                    $['actual'],
                                    ($) => Value_Type(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'type not allowed':
                        return _p.ss(
                            $,
                            ($) => ['type not allowed', {
                                'type': _p_change_context(
                                    $['type'],
                                    ($) => Value_Type(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'missing property':
                        return _p.ss(
                            $,
                            ($) => ['missing property', $],
                        )
                    case 'superfluous property':
                        return _p.ss(
                            $,
                            ($) => ['superfluous property', {
                                'name': _p_change_context(
                                    $['name'],
                                    ($) => $,
                                ),
                                'type': _p_change_context(
                                    $['type'],
                                    ($) => Value_Type(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const Value_Type: t_signatures.Value_Type = ($) => _p.decide.state(
    $,
    ($): t_out.Value_Type => {
        switch ($[0]) {
            case 'array':
                return _p.ss(
                    $,
                    ($) => ['array', null],
                )
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ['boolean', null],
                )
            case 'null':
                return _p.ss(
                    $,
                    ($) => ['null', null],
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ['number', null],
                )
            case 'object':
                return _p.ss(
                    $,
                    ($) => ['object', null],
                )
            case 'string':
                return _p.ss(
                    $,
                    ($) => ['string', null],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)
