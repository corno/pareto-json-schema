import * as sh from "../../shorthands/schema_for_legacy_json"

export const $ = sh.document(
    {

    },
    {
        "Meta Pointer": sh.definition(
            {

            },
            sh.v.object_static({
                "language": sh.property(sh.v.string()),
                "version": sh.property(sh.v.string()),
                "key": sh.property(sh.v.string()),
            })
        )
    },
    sh.v.object_dynamic(sh.v.object_static({
        "serializationFormatVersion": sh.property(sh.v.string()),
        "languages": sh.property(sh.v.array_dynamic(sh.v.object_static({
            "key": sh.property(sh.v.string()),
            "version": sh.property(sh.v.string()),
        }))),
        "nodes": sh.property(sh.v.array_dynamic(sh.v.object_static({
            "id": sh.property(sh.v.string()),
            "classifier": sh.property(sh.v.reference_internal(["Meta Pointer"])),
            "properties": sh.property(sh.v.array_dynamic(sh.v.object_static({
                "property": sh.property(sh.v.reference_internal(["Meta Pointer"])),
                "value": sh.property(sh.v.string()),
            }))),
            "containments": sh.property(sh.v.array_dynamic(sh.v.object_static({
                "containment": sh.property(sh.v.reference_internal(["Meta Pointer"])),
                "children": sh.property(sh.v.array_dynamic(sh.v.string())),
            }))),
            "references": sh.property(sh.v.array_dynamic(sh.v.object_static({
                "reference": sh.property(sh.v.reference_internal(["Meta Pointer"])),
                "targets": sh.property(sh.v.array_dynamic(sh.v.object_static({
                    "resolveInfo": sh.property(sh.v.string()),
                    "reference": sh.property(sh.v.multiple_types({
                        'string': sh.m.string(),
                        'null': sh.m.null_(),
                    })),
                }))),
            }))),
            "annotations": sh.property(sh.v.array_dynamic(sh.v.string())),
            "parent": sh.property(sh.v.multiple_types({
                'string': sh.m.string(),
                'null': sh.m.null_(),
            })),
        })))
    }))
)