
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/data"

export const Schema: t_signatures.Schema = ($) => ({
    'definitions': _p_change_context(
        $['definitions'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => Value(
                $,
            ),
        ),
    ),
    'root': _p_change_context(
        $['root'],
        ($) => $,
    ),
})

export const Value: t_signatures.Value = ($) => _p.decide.state(
    $,
    ($): t_out.Value => {
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
                                ($) => Array(
                                    $,
                                ),
                            ),
                        ),
                        'boolean': _p_change_context(
                            $['boolean'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Boolean(
                                    $,
                                ),
                            ),
                        ),
                        'null': _p_change_context(
                            $['null'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Null(
                                    $,
                                ),
                            ),
                        ),
                        'number': _p_change_context(
                            $['number'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Number(
                                    $,
                                ),
                            ),
                        ),
                        'object': _p_change_context(
                            $['object'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Object(
                                    $,
                                ),
                            ),
                        ),
                        'string': _p_change_context(
                            $['string'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => String(
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
            case 'primitive':
                return _p.ss(
                    $,
                    ($) => ['primitive', _p.decide.state(
                        $,
                        ($): t_out.Value.primitive => {
                            switch ($[0]) {
                                case 'array':
                                    return _p.ss(
                                        $,
                                        ($) => ['array', Array(
                                            $,
                                        )],
                                    )
                                case 'boolean':
                                    return _p.ss(
                                        $,
                                        ($) => ['boolean', Boolean(
                                            $,
                                        )],
                                    )
                                case 'null':
                                    return _p.ss(
                                        $,
                                        ($) => ['null', Null(
                                            $,
                                        )],
                                    )
                                case 'number':
                                    return _p.ss(
                                        $,
                                        ($) => ['number', Number(
                                            $,
                                        )],
                                    )
                                case 'object':
                                    return _p.ss(
                                        $,
                                        ($) => ['object', Object(
                                            $,
                                        )],
                                    )
                                case 'string':
                                    return _p.ss(
                                        $,
                                        ($) => ['string', String(
                                            $,
                                        )],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )],
                )
            case 'nullable':
                return _p.ss(
                    $,
                    ($) => ['nullable', Value(
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

export const Array: t_signatures.Array = ($) => ({
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Array.type_ => {
                switch ($[0]) {
                    case 'dynamic':
                        return _p.ss(
                            $,
                            ($) => ['dynamic', Value(
                                $,
                            )],
                        )
                    case 'static':
                        return _p.ss(
                            $,
                            ($) => ['static', {
                                'properties': _p_change_context(
                                    $['properties'],
                                    ($) => _p.dictionary.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => Value(
                                            $,
                                        ),
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

export const Boolean: t_signatures.Boolean = ($) => null

export const Null: t_signatures.Null = ($) => null

export const Number: t_signatures.Number = ($) => null

export const Object: t_signatures.Object = ($) => ({
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Object.type_ => {
                switch ($[0]) {
                    case 'static':
                        return _p.ss(
                            $,
                            ($) => ['static', Static_Object(
                                $,
                            )],
                        )
                    case 'dynamic':
                        return _p.ss(
                            $,
                            ($) => ['dynamic', Value(
                                $,
                            )],
                        )
                    case 'mixed':
                        return _p.ss(
                            $,
                            ($) => ['mixed', {
                                'static': _p_change_context(
                                    $['static'],
                                    ($) => Static_Object(
                                        $,
                                    ),
                                ),
                                'dynamic': _p_change_context(
                                    $['dynamic'],
                                    ($) => Value(
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

export const Static_Object: t_signatures.Static_Object = ($) => ({
    'properties': _p_change_context(
        $['properties'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'definition': _p_change_context(
                    $['definition'],
                    ($) => Value(
                        $,
                    ),
                ),
                'presence': _p_change_context(
                    $['presence'],
                    ($) => _p.decide.state(
                        $,
                        ($): t_out.Static_Object.properties.D.presence => {
                            switch ($[0]) {
                                case 'required':
                                    return _p.ss(
                                        $,
                                        ($) => ['required', null],
                                    )
                                case 'optional':
                                    return _p.ss(
                                        $,
                                        ($) => ['optional', {
                                            'nullable': _p_change_context(
                                                $['nullable'],
                                                ($) => $,
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
            }),
        ),
    ),
})

export const String: t_signatures.String = ($) => _p.decide.state(
    $,
    ($): t_out.String => {
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
