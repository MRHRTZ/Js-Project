const manifest = require('manifest')

manifest.download('https://manifest.googlevideo.com/api/manifest/dash/expire/1603696374/ei/liKWX7TJC5y31gLTzo3gDA/ip/145.239.118.128/id/712bebf5339f1334/source/youtube/requiressl/yes/playback_host/r4---sn-25glen7e.googlevideo.com/mh/_b/mm/31%2C26/mn/sn-25glen7e%2Csn-p5qs7ned/ms/au%2Conr/mv/m/mvi/4/pl/18/tx/23938785/txs/23938784%2C23938785%2C23938786/hfr/all/as/fmp4_audio_clear%2Cwebm_audio_clear%2Cwebm2_audio_clear%2Cfmp4_sd_hd_clear%2Cwebm2_sd_hd_clear/initcwndbps/612500/vprv/1/mt/1603674643/fvip/4/keepalive/yes/beids/9466588/itag/0/sparams/expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Ctx%2Ctxs%2Chfr%2Cas%2Cvprv%2Citag/sig/AOq0QJ8wRQIgTVZGLNyO_SFBGF-wjNo8w_gCFqCQk415ZHS10tG_CboCIQDK2m8_W2IJfiM3-i7Ufe2v_bX9vtjdVKHxJtlTR5RhOQ%3D%3D/lsparams/playback_host%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps/lsig/AG3C_xAwRgIhAOSUfnKqAQpXjO59uI7Wwh18h7XBb68KYdyUznWn7rovAiEA6mcXCbtDCJYvVq4cfp5UFP67PTtd_20kIczt3nUdoMc%3D', function(err, resp) {
  // it's done
  if (err) return console.log(err)
  if (resp) return console.log(resp)
});