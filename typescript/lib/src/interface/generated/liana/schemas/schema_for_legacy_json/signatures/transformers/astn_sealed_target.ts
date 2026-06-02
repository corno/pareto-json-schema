
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "../../data"

export namespace Document_ {
    
    export type I = i_in.Document
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
) => Document_.O

export namespace Definitions_ {
    
    export type I = i_in.Definitions
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Definitions_ = (
    context: Definitions_.I,
) => Definitions_.O

export namespace Schema_ {
    
    export type I = i_in.Schema
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
) => Schema_.O

export namespace Array_ {
    
    export type I = i_in.Array
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Array_ = (
    context: Array_.I,
) => Array_.O

export namespace Boolean_ {
    
    export type I = i_in.Boolean
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Boolean_ = (
    context: Boolean_.I,
) => Boolean_.O

export namespace Null_ {
    
    export type I = i_in.Null
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Null_ = (
    context: Null_.I,
) => Null_.O

export namespace Number_ {
    
    export type I = i_in.Number
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Number_ = (
    context: Number_.I,
) => Number_.O

export namespace Object_ {
    
    export type I = i_in.Object
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Object_ = (
    context: Object_.I,
) => Object_.O

export namespace Static_Object_ {
    
    export type I = i_in.Static_Object
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Static_Object_ = (
    context: Static_Object_.I,
) => Static_Object_.O

export namespace String_ {
    
    export type I = i_in.String
    
    export type O = i_out.Value
    
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
    Array_ as Array, 
    Boolean_ as Boolean, 
    Null_ as Null, 
    Number_ as Number, 
    Object_ as Object, 
    Static_Object_ as Static_Object, 
    String_ as String, 
}
