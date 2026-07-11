
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/data'

export namespace Document_ {
    
    export namespace imports {
        
        export type D = Document_
        
    }
    
    export type imports = p_di.Dictionary<imports.D>
    
    export type definitions = Definitions_
    
    export type root = string
    
}

export type Document_ = {
    readonly 'imports': Document_.imports
    readonly 'definitions': Document_.definitions
    readonly 'root': Document_.root
}

export namespace Definitions_ {
    
    export type D = Schema_
    
}

export type Definitions_ = p_di.Dictionary<Definitions_.D>

export namespace Schema_ {
    
    export type any_ = null
    
    export type const_ = Const_Value_
    
    export namespace one_of {
        
        export type D = Schema_
        
    }
    
    export type one_of = p_di.Dictionary<one_of.D>
    
    export namespace reference {
        
        export namespace document {
            
            export type O = string
            
        }
        
        export type document = p_di.Optional_Value<document.O>
        
        export type definition = string
        
    }
    
    export type reference = {
        readonly 'document': reference.document
        readonly 'definition': reference.definition
    }
    
    export namespace type_constraint {
        
        export namespace single {
            
            export type array = Array_
            
            export type boolean_ = Boolean_
            
            export type null_ = Null_
            
            export type number_ = Number_
            
            export type object_ = Object_
            
            export type string_ = String_
            
        }
        
        export type single = 
            | readonly ['array', single.array]
            | readonly ['boolean', single.boolean_]
            | readonly ['null', single.null_]
            | readonly ['number', single.number_]
            | readonly ['object', single.object_]
            | readonly ['string', single.string_]
        
        export namespace multiple {
            
            export namespace array {
                
                export type O = Array_
                
            }
            
            export type array = p_di.Optional_Value<array.O>
            
            export namespace boolean_ {
                
                export type O = Boolean_
                
            }
            
            export type boolean_ = p_di.Optional_Value<boolean_.O>
            
            export namespace null_ {
                
                export type O = Null_
                
            }
            
            export type null_ = p_di.Optional_Value<null_.O>
            
            export namespace number_ {
                
                export type O = Number_
                
            }
            
            export type number_ = p_di.Optional_Value<number_.O>
            
            export namespace object_ {
                
                export type O = Object_
                
            }
            
            export type object_ = p_di.Optional_Value<object_.O>
            
            export namespace string_ {
                
                export type O = String_
                
            }
            
            export type string_ = p_di.Optional_Value<string_.O>
            
        }
        
        export type multiple = {
            readonly 'array': multiple.array
            readonly 'boolean': multiple.boolean_
            readonly 'null': multiple.null_
            readonly 'number': multiple.number_
            readonly 'object': multiple.object_
            readonly 'string': multiple.string_
        }
        
    }
    
    export type type_constraint = 
        | readonly ['single', type_constraint.single]
        | readonly ['multiple', type_constraint.multiple]
    
}

export type Schema_ = 
    | readonly ['any', Schema_.any_]
    | readonly ['const', Schema_.const_]
    | readonly ['one of', Schema_.one_of]
    | readonly ['reference', Schema_.reference]
    | readonly ['type constraint', Schema_.type_constraint]

export namespace Const_Value_ {
    
    export namespace array {
        
        export type L = Const_Value_
        
    }
    
    export type array = p_di.List<array.L>
    
    export type boolean_ = boolean
    
    export type null_ = null
    
    export type number_ = number
    
    export namespace object_ {
        
        export type D = Const_Value_
        
    }
    
    export type object_ = p_di.Dictionary<object_.D>
    
    export type string_ = string
    
}

export type Const_Value_ = 
    | readonly ['array', Const_Value_.array]
    | readonly ['boolean', Const_Value_.boolean_]
    | readonly ['null', Const_Value_.null_]
    | readonly ['number', Const_Value_.number_]
    | readonly ['object', Const_Value_.object_]
    | readonly ['string', Const_Value_.string_]

export namespace Array_ {
    
    export namespace type_ {
        
        export type dynamic = Schema_
        
        export namespace static_ {
            
            export namespace properties {
                
                export type D = Schema_
                
            }
            
            export type properties = p_di.Dictionary<properties.D>
            
        }
        
        export type static_ = {
            readonly 'properties': static_.properties
        }
        
    }
    
    export type type_ = 
        | readonly ['dynamic', type_.dynamic]
        | readonly ['static', type_.static_]
    
}

export type Array_ = {
    readonly 'type': Array_.type_
}

export type Boolean_ = null

export type Null_ = null

export type Number_ = null

export namespace Object_ {
    
    export namespace type_ {
        
        export type static_ = Static_Object_
        
        export type dynamic = Schema_
        
        export namespace mixed {
            
            export type static_ = Static_Object_
            
            export type dynamic = Schema_
            
        }
        
        export type mixed = {
            readonly 'static': mixed.static_
            readonly 'dynamic': mixed.dynamic
        }
        
    }
    
    export type type_ = 
        | readonly ['static', type_.static_]
        | readonly ['dynamic', type_.dynamic]
        | readonly ['mixed', type_.mixed]
    
}

export type Object_ = {
    readonly 'type': Object_.type_
}

export namespace Static_Object_ {
    
    export namespace properties {
        
        export namespace D {
            
            export type schema = Schema_
            
            export type optional = boolean
            
        }
        
        export type D = {
            readonly 'schema': D.schema
            readonly 'optional': D.optional
        }
        
    }
    
    export type properties = p_di.Dictionary<properties.D>
    
}

export type Static_Object_ = {
    readonly 'properties': Static_Object_.properties
}

export namespace String_ {
    
    export type any_ = null
    
    export namespace enum_ {
        
        export type D = null
        
    }
    
    export type enum_ = p_di.Dictionary<enum_.D>
    
}

export type String_ = 
    | readonly ['any', String_.any_]
    | readonly ['enum', String_.enum_]

export type { 
    Document_ as Document, 
    Definitions_ as Definitions, 
    Schema_ as Schema, 
    Const_Value_ as Const_Value, 
    Array_ as Array, 
    Boolean_ as Boolean, 
    Null_ as Null, 
    Number_ as Number, 
    Object_ as Object, 
    Static_Object_ as Static_Object, 
    String_ as String, 
}
