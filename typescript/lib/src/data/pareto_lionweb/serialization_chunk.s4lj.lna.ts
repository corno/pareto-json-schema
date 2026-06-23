import * as sh from "../../shorthands/schema_for_legacy_json/manual"

export const $ = sh.document(
    {

    },
    {
        "": sh.v.object_dynamic(
            sh.v.object_static({
                "serializationFormatVersion": sh.property(
                    sh.v.string()),
                "languages": sh.property(
                    sh.v.array_dynamic(
                        sh.v.object_static({
                            "key": sh.property(
                                sh.v.reference_internal("$defs/key")),
                            "version": sh.property(
                                sh.v.reference_internal("$defs/version")),
                        }))),
                "nodes": sh.property(
                    sh.v.array_dynamic(
                        sh.v.object_static({
                            "id": sh.property(
                                sh.v.reference_internal("$defs/id")),
                            "classifier": sh.property(
                                sh.v.reference_internal("$defs/metaPointer")),
                            "properties": sh.property(
                                sh.v.array_dynamic(
                                    sh.v.object_static({
                                        "property": sh.property(
                                            sh.v.reference_internal("$defs/metaPointer")),
                                        "value": sh.property(
                                            sh.v.one_of({
                                                "string": sh.v.string(),
                                                "null": sh.v.null_(),
                                            })),
                                    }))),
                            "containments": sh.property(
                                sh.v.array_dynamic(
                                    sh.v.object_static({
                                        "containment": sh.property(
                                            sh.v.reference_internal("$defs/metaPointer")),
                                        "children": sh.property(
                                            sh.v.array_dynamic(
                                                sh.v.string())),
                                    }))),
                            "references": sh.property(
                                sh.v.array_dynamic(
                                    sh.v.object_static({
                                        "reference": sh.property(
                                            sh.v.reference_internal("$defs/metaPointer")),
                                        "targets": sh.property(
                                            sh.v.array_dynamic(
                                                sh.v.object_static({
                                                    "resolveInfo": sh.property(
                                                        sh.v.string()),
                                                    "reference": sh.property(
                                                        sh.v.one_of({
                                                            "string": sh.v.string(),
                                                            "null": sh.v.null_(),
                                                        })),
                                                }))),
                                    }))),
                            "annotations": sh.property(
                                sh.v.array_dynamic(
                                    sh.v.string())),
                            "parent": sh.property(
                                sh.v.one_of({
                                    "string": sh.v.string(),
                                    "null": sh.v.null_(),
                                })),
                        })))
            })),
        "$defs/id": sh.v.string(),
        "$defs/key": sh.v.string(),
        "$defs/version": sh.v.string(),
        "$defs/metaPointer": sh.v.object_static({
            "language": sh.property(
                sh.v.string()),
            "version": sh.property(
                sh.v.string()),
            "key": sh.property(
                sh.v.string()),
        }),
    },
    "", //the root schema is the empty string, since it has no path
)