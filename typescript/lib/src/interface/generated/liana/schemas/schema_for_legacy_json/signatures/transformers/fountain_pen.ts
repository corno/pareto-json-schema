
import * as p_i from 'pareto-core/dist/__internals/Abort'

import * as i_in from "../../data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace Document_ {
    
    export type I = i_in.Document
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
) => Document_.O

export namespace Definitions_ {
    
    export type I = i_in.Definitions
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Definitions_ = (
    context: Definitions_.I,
) => Definitions_.O

export namespace Schema_ {
    
    export type I = i_in.Schema
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
) => Schema_.O

export namespace Const_Value_ {
    
    export type I = i_in.Const_Value
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Const_Value_ = (
    context: Const_Value_.I,
) => Const_Value_.O

export namespace Array_ {
    
    export type I = i_in.Array
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Array_ = (
    context: Array_.I,
) => Array_.O

export namespace Boolean_ {
    
    export type I = i_in.Boolean
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Boolean_ = (
    context: Boolean_.I,
) => Boolean_.O

export namespace Null_ {
    
    export type I = i_in.Null
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Null_ = (
    context: Null_.I,
) => Null_.O

export namespace Number_ {
    
    export type I = i_in.Number
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Number_ = (
    context: Number_.I,
) => Number_.O

export namespace Object_ {
    
    export type I = i_in.Object
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Object_ = (
    context: Object_.I,
) => Object_.O

export namespace Static_Object_ {
    
    export type I = i_in.Static_Object
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Static_Object_ = (
    context: Static_Object_.I,
) => Static_Object_.O

export namespace String_ {
    
    export type I = i_in.String
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type String_ = (
    context: String_.I,
) => String_.O

export { 
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
