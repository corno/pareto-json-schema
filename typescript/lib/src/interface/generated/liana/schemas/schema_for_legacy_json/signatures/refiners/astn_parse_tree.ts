
import * as p_i from 'pareto-core/dist/interface/__internal/Abort'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "../../data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Document_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: p_i.Abort<Document_.E>,
) => Document_.O

export namespace Definitions_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Definitions
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Definitions_ = (
    context: Definitions_.I,
    abort: p_i.Abort<Definitions_.E>,
) => Definitions_.O

export namespace Schema_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: p_i.Abort<Schema_.E>,
) => Schema_.O

export namespace Const_Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Const_Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Const_Value_ = (
    context: Const_Value_.I,
    abort: p_i.Abort<Const_Value_.E>,
) => Const_Value_.O

export namespace Array_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Array
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Array_ = (
    context: Array_.I,
    abort: p_i.Abort<Array_.E>,
) => Array_.O

export namespace Boolean_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Boolean
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Boolean_ = (
    context: Boolean_.I,
    abort: p_i.Abort<Boolean_.E>,
) => Boolean_.O

export namespace Null_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Null
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Null_ = (
    context: Null_.I,
    abort: p_i.Abort<Null_.E>,
) => Null_.O

export namespace Number_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Number
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Number_ = (
    context: Number_.I,
    abort: p_i.Abort<Number_.E>,
) => Number_.O

export namespace Object_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Object
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Object_ = (
    context: Object_.I,
    abort: p_i.Abort<Object_.E>,
) => Object_.O

export namespace Static_Object_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Static_Object
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Static_Object_ = (
    context: Static_Object_.I,
    abort: p_i.Abort<Static_Object_.E>,
) => Static_Object_.O

export namespace String_ {
    
    export type I = i_in.Value
    
    export type O = i_out.String
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type String_ = (
    context: String_.I,
    abort: p_i.Abort<String_.E>,
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
