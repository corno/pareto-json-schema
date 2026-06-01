
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/data"

export const Array: t_signatures.Array = ($) => ({
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Array.type_ => {
                switch ($[0]) {
                    case 'list':
                        return _p.ss(
                            $,
                            ($) => ['list', Value(
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
                                                ($) => Value(
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
                            ($) => ['dictionary', Value(
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
)

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
