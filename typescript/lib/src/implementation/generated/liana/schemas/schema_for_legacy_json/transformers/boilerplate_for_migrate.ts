
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/data"

export const Document: t_signatures.Document = ($) => ({
    'imports': _p_change_context(
        $['imports'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => Schema(
                $,
            ),
        ),
    ),
    'definitions': _p_change_context(
        $['definitions'],
        ($) => Definitions(
            $,
        ),
    ),
    'schema': _p_change_context(
        $['schema'],
        ($) => Schema(
            $,
        ),
    ),
})

export const Definitions: t_signatures.Definitions = ($) => _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ({
        'definitions': _p_change_context(
            $['definitions'],
            ($) => Definitions(
                $,
            ),
        ),
        'schema': _p_change_context(
            $['schema'],
            ($) => Schema(
                $,
            ),
        ),
    }),
)

export const Schema: t_signatures.Schema = ($) => _p.decide.state(
    $,
    ($): t_out.Schema => {
        switch ($[0]) {
            case 'any':
                return _p.ss(
                    $,
                    ($) => ['any', null],
                )
            case 'const':
                return _p.ss(
                    $,
                    ($) => ['const', Const_Value(
                        $,
                    )],
                )
            case 'one of':
                return _p.ss(
                    $,
                    ($) => ['one of', _p.dictionary.from.dictionary(
                        $,
                    ).map(
                        ($, id) => Schema(
                            $,
                        ),
                    )],
                )
            case 'reference':
                return _p.ss(
                    $,
                    ($) => ['reference', {
                        'document': _p_change_context(
                            $['document'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => $,
                            ),
                        ),
                        'steps': _p_change_context(
                            $['steps'],
                            ($) => _p.list.from.list(
                                $,
                            ).map(
                                ($) => $,
                            ),
                        ),
                    }],
                )
            case 'type constraint':
                return _p.ss(
                    $,
                    ($) => ['type constraint', _p.decide.state(
                        $,
                        ($): t_out.Schema.type_constraint => {
                            switch ($[0]) {
                                case 'single':
                                    return _p.ss(
                                        $,
                                        ($) => ['single', _p.decide.state(
                                            $,
                                            ($): t_out.Schema.type_constraint.single => {
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
                                case 'multiple':
                                    return _p.ss(
                                        $,
                                        ($) => ['multiple', {
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
                                        }],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

export const Const_Value: t_signatures.Const_Value = ($) => _p.decide.state(
    $,
    ($): t_out.Const_Value => {
        switch ($[0]) {
            case 'array':
                return _p.ss(
                    $,
                    ($) => ['array', _p.list.from.list(
                        $,
                    ).map(
                        ($) => Const_Value(
                            $,
                        ),
                    )],
                )
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ['boolean', $],
                )
            case 'null':
                return _p.ss(
                    $,
                    ($) => ['null', null],
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ['number', $],
                )
            case 'object':
                return _p.ss(
                    $,
                    ($) => ['object', _p.dictionary.from.dictionary(
                        $,
                    ).map(
                        ($, id) => Const_Value(
                            $,
                        ),
                    )],
                )
            case 'string':
                return _p.ss(
                    $,
                    ($) => ['string', $],
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
                            ($) => ['dynamic', Schema(
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
                                        ($, id) => Schema(
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
                            ($) => ['dynamic', Schema(
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
                                    ($) => Schema(
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
                'schema': _p_change_context(
                    $['schema'],
                    ($) => Schema(
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
