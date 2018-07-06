
#import "RNLhhLibrary.h"

@implementation RNLhhLibrary

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_METHOD(_init:(NSDictionary *)indic){

 dispatch_async(dispatch_get_main_queue(), ^{

//            [self.bridge.eventDispatcher sendAppEventWithName:@"pickerEvent" body:["1"]];
    });

}

@end
  
