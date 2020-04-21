import React, { useRef, useEffect, useState } from 'react';
import './exercise.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function App() {
    const currentDate = new Intl.DateTimeFormat(
		'en-GB', 
		{weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
    ).format(new Date());
    const weekday = new Intl.DateTimeFormat(
		'en-GB', 
		{weekday: 'long'}
    ).format(new Date());
    const day = new Intl.DateTimeFormat(
		'en-GB', 
		{day: 'numeric'}
    ).format(new Date());
    const month = new Intl.DateTimeFormat(
		'en-GB', 
		{ month: 'long'}
    ).format(new Date());
    const year = new Intl.DateTimeFormat(
		'en-GB', 
		{year: 'numeric'}
    ).format(new Date());
    return (
        <Box>
            <Box bgcolor="palevioletred" style={{zIndex: 1, position: "fixed", right: 50, top: 50}}>
            
            <Typography>{weekday}</Typography>
                <Typography variant="h3">
                    {day}
                </Typography>
                <Typography>{month}</Typography>
                <Typography>{year}</Typography>
            </Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis pretium lorem in dignissim. Mauris nec volutpat nulla. Maecenas efficitur feugiat convallis. Quisque congue vestibulum tristique. Mauris nec nisl sit amet magna lacinia volutpat sit amet non purus. Sed ac elit eu massa tristique faucibus. Vivamus id nisi id purus volutpat aliquam. Phasellus molestie at sapien a venenatis. In hac habitasse platea dictumst. Vivamus vulputate faucibus tortor, ac fringilla nisi interdum euismod. Sed imperdiet placerat nisi eget viverra.

                Morbi tincidunt ante tellus, ut accumsan tortor tincidunt nec. Praesent fringilla eget ipsum in auctor. Cras accumsan in lectus in faucibus. Maecenas a vestibulum lorem. Aliquam eget volutpat ante. Integer maximus libero sit amet magna viverra finibus. Quisque mattis massa vitae congue semper. Phasellus eget euismod ipsum. Integer imperdiet ipsum sit amet mollis pulvinar. Etiam venenatis auctor auctor.

                Duis mattis sed ligula quis fermentum. Curabitur lacinia erat dui, at blandit tortor interdum in. Integer venenatis quam lacus, at condimentum tellus aliquam in. Ut interdum dignissim egestas. Duis gravida finibus metus a gravida. Praesent facilisis dapibus laoreet. Phasellus pretium efficitur odio feugiat condimentum. Vestibulum imperdiet volutpat libero, eu cursus diam eleifend eu. Aenean commodo lorem sit amet ipsum euismod, cursus mollis lorem eleifend. Praesent risus elit, sollicitudin sit amet diam sit amet, mattis blandit nulla. Sed nec lectus a turpis cursus mattis non non libero. Sed sit amet tincidunt diam.

                Integer varius blandit sem, ornare congue tortor pulvinar eleifend. Nulla rhoncus orci ante, id laoreet mi vehicula vel. Nam risus erat, volutpat id fermentum ac, interdum ac dolor. Cras finibus nibh id nisl tincidunt cursus. Phasellus consectetur aliquet egestas. Proin at est dignissim, blandit quam non, semper nisi. Ut a iaculis velit.

                Sed venenatis arcu vitae vulputate semper. Nunc urna erat, ullamcorper ut magna quis, ultricies pulvinar mi. Suspendisse potenti. Vivamus non gravida ligula. In hac habitasse platea dictumst. Maecenas lacinia aliquet odio ut congue. Fusce in leo quis justo consectetur dapibus ac eu leo. Morbi luctus massa nec turpis sodales, non suscipit libero vehicula. Vivamus quis dolor lectus. Morbi a nisi ullamcorper, interdum erat ac, ultrices nulla. Morbi suscipit massa at tristique auctor.

                Pellentesque nec magna ut tortor cursus varius. Integer mattis sapien quis turpis egestas, vitae condimentum lacus gravida. Pellentesque volutpat neque non ex laoreet suscipit. Donec enim mi, pharetra sit amet malesuada eget, mollis sed massa. Vestibulum eget suscipit ipsum. Nam gravida est in vulputate maximus. Aliquam nisl lacus, volutpat ac feugiat eget, aliquet sit amet tortor. Aliquam tempor nec sem consectetur faucibus. Integer sagittis rhoncus accumsan.

                Fusce semper ultrices eros sit amet tempus. Nullam eget condimentum mauris. Nam elementum rutrum dolor, sit amet condimentum leo venenatis ac. Nunc sit amet sem condimentum, mattis sem id, malesuada elit. Quisque eu turpis tincidunt, cursus libero eu, convallis massa. Duis vel blandit nulla, non tempus ante. Phasellus placerat mauris sapien. Vestibulum eget odio eu nulla molestie blandit eget facilisis mauris. Proin venenatis at ex ut dapibus. Mauris vitae ipsum quis nulla pretium iaculis. Etiam ultricies lorem dui, ut interdum leo facilisis quis. Nulla tempus imperdiet magna non faucibus. Ut et tortor libero. Pellentesque nunc dui, faucibus sit amet odio sed, maximus tincidunt ex.

                Donec aliquam a odio a consectetur. Mauris dignissim id purus et tincidunt. Mauris justo elit, dapibus quis sollicitudin sed, tempus hendrerit turpis. Curabitur pellentesque, massa sit amet placerat sodales, tortor velit pellentesque lorem, congue hendrerit orci urna ac nibh. In hac habitasse platea dictumst. Donec ultricies felis id leo semper blandit. Aenean pretium dui eget mattis consequat.

                Vestibulum et lacinia magna, eget scelerisque dolor. Sed luctus tempor lorem non tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio non elementum consequat. Vivamus pellentesque turpis nisl. Donec eget mollis nibh. Donec vel augue aliquam, convallis metus nec, dictum ex. Integer tincidunt arcu tortor, vel semper augue pulvinar at. Ut semper at est nec fermentum. Nam ut aliquet tortor, id sodales ligula. Vestibulum nec quam ac metus venenatis scelerisque. Aliquam a felis eleifend, posuere diam finibus, auctor ante. Ut blandit sit amet ipsum sit amet aliquet.

                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi elit arcu, tempor vitae justo eu, eleifend malesuada arcu. Sed quis mauris ac nunc aliquam lobortis. Praesent faucibus nunc in enim dapibus, in sagittis nisi tristique. Vestibulum vel mauris vestibulum, mollis quam eget, egestas ex. Praesent et orci est. Vestibulum tincidunt, nisi quis pellentesque porttitor, est ligula aliquam ligula, non convallis odio diam id nibh. Quisque vel eros consequat, euismod lectus non, convallis nunc. Aenean magna ex, vehicula quis sapien et, luctus sodales leo. Vivamus et gravida eros. Suspendisse dignissim feugiat dictum. Mauris aliquet fermentum turpis, eget laoreet leo condimentum auctor. Suspendisse sed ligula mauris.

                Suspendisse potenti. Vestibulum non felis mi. Proin ipsum leo, iaculis laoreet pharetra sed, laoreet vel tortor. Nam dignissim turpis et arcu posuere, a ultrices magna pharetra. Proin maximus ac tellus ut tristique. Quisque nec erat augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vel nisl luctus, aliquam lectus nec, gravida nibh. Maecenas iaculis, risus ut mollis mattis, metus sem aliquam orci, a ultricies velit tellus eget ex. Ut id condimentum magna. Nam sem sem, ultricies eu pharetra quis, efficitur sed libero. Nullam ac elit condimentum orci viverra tempus in vitae est. In fermentum vel nunc a faucibus.

                Praesent condimentum aliquet ipsum, et luctus felis. Pellentesque facilisis bibendum lectus, at venenatis augue scelerisque vitae. Sed auctor mattis magna id aliquam. Vivamus justo est, pharetra eget fermentum a, sodales at velit. Integer fringilla, lectus nec elementum cursus, neque sem aliquet purus, sed varius nibh nunc nec augue. Ut interdum vitae est convallis placerat. Etiam tristique pharetra erat ut mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam non mi id velit viverra condimentum sed ac mauris. Vivamus nec placerat ante. Quisque consequat aliquam aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat.

                Aenean nulla justo, varius non bibendum ac, pellentesque nec nunc. Sed aliquet placerat vehicula. Nam tempus suscipit enim, scelerisque euismod dolor feugiat eu. Aliquam vehicula imperdiet elit ut consequat. Praesent at turpis lectus. Sed eu erat maximus, cursus lorem sed, cursus ligula. Curabitur iaculis tristique augue a tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pretium nulla est, sed laoreet orci fermentum sed. Integer vel justo commodo, dapibus libero a, rhoncus justo. Integer tincidunt eleifend nisl, sed faucibus eros. Vivamus porttitor sapien condimentum nibh vehicula, sed placerat enim mattis.

                Fusce fermentum blandit turpis et pulvinar. Vestibulum suscipit massa tortor, sed condimentum arcu condimentum in. Nunc efficitur dui augue, sed rhoncus velit tincidunt et. Phasellus sagittis efficitur augue, eu condimentum nisl eleifend vitae. Nam at pellentesque odio, et semper magna. Nunc vitae eros non turpis congue tempus. In accumsan ultricies convallis. Quisque non pulvinar lacus, non tempus tellus. Nunc a congue velit. Nulla nisl felis, viverra non purus in, volutpat ultricies lorem. Cras id eleifend tortor, eget dapibus leo. Donec ultrices diam id arcu pretium aliquam.

                Nulla vehicula luctus pharetra. Curabitur tempor tortor in aliquam condimentum. Sed ac est arcu. Donec venenatis mauris nunc. Aenean pulvinar tincidunt nunc in feugiat. Aliquam ut porta lorem. Vivamus eu mi elementum, blandit nulla at, mollis ipsum. Pellentesque facilisis diam sit amet tortor porta ultricies. Aenean sit amet libero et erat tempus molestie id nec turpis. Aliquam sed nibh ac risus faucibus facilisis vitae a magna. Suspendisse mollis odio quis congue pretium. Pellentesque sagittis magna eget est varius tempus. 
        </Box>
    );
}

export default App;