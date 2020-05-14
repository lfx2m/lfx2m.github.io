<?php
phpinfo();

/* require_once 'apikeys.php';
 
# Looking to land your dream job in tech?
# Join me for interview training at http://techinterviewpro.com/
 
# Also check out the services we're using here:
# https://www.cloudimage.io/en/home?ref=techlead
# https://www.scraperapi.com?fpr=techlead
# http://ligo-autismo.org/
# https://www.youtube.com/watch?v=L9pFcjIvZRs


$search = trim(htmlspecialchars($_REQUEST['search']));
if(!$search) $search = "San Francisco pics";
$url = ("http://ligo-autismo.org/".urlencode($search)."&src=typd");
$proxiedUrl = "http://api.scraperapi.com?api_key=$SCRAPERAPIKEY&url=".$url;
$data = file_get_contents($proxiedUrl);
 
print <<<EOF
<form action=index.php><input name=search value="$search"><input type=submit></form>
EOF;
 

$tweets = explode('<small class="time">', $data);
foreach($tweets as $tweet){
  if(strpos($tweet, 'pbs.twimg') == -1) continue;
  if (preg_match_all('#<a href="(/.*?)".*?AdaptiveMedia.*?(https://pbs.twimg.*?\.(png|jpg))#s',
     $tweet, $matches)) {
      $url = $matches[1][0];
      $pic = $matches[2][0];
      $map[$url] = $pic;
  }
}
 
foreach($map as $url=>$pic){
  $cloudimage = "https://anaixnggen.cloudimg.io/crop/300x300/x/" . $pic;
  print "<a href=http://twitter.com/$url><img width=width src='$cloudimage'></a>";
}

*/