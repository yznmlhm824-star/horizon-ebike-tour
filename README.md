<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مشروع أُفق | Horizon — اركب. اكتشف. أبقِ الأثر جميلاً.</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Amiri:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --forest:    #0e2d1a;
            --forest-mid:#1a4a2a;
            --forest-lt: #255c36;
            --gold:      #c8a45a;
            --gold-light:#e0c07a;
            --gold-dim:  rgba(200,164,90,0.18);
            --cream:     #f9f6ef;
            --white:     #ffffff;
            --text-dark: #1a1a18;
            --text-mid:  #444;
            --shadow-lg: 0 24px 64px rgba(14,45,26,0.18);
            --r: 18px;
        }

        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}

        body{
            font-family:'Cairo',sans-serif;
            background:var(--cream);
            color:var(--text-dark);
            line-height:1.85;
            overflow-x:hidden;
        }

        /* SCROLLBAR */
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:var(--forest)}
        ::-webkit-scrollbar-thumb{background:var(--gold);border-radius:3px}

        /* ===== NAV ===== */
        nav{
            background:linear-gradient(135deg,var(--forest) 0%,var(--forest-mid) 100%);
            padding:.9rem 2.5rem;
            box-shadow:0 4px 24px rgba(0,0,0,0.28);
            position:sticky;top:0;z-index:1000;
            display:flex;justify-content:space-between;align-items:center;
            border-bottom:2px solid var(--gold-dim);
        }
        .nav-logo{text-decoration:none;display:flex;flex-direction:column;gap:.1rem}
        .logo-text{font-family:'Amiri',serif;font-size:2rem;color:var(--gold);line-height:1}
        .logo-sub{font-size:.6rem;letter-spacing:4px;color:rgba(255,255,255,0.5);text-transform:uppercase}
        .nav-menu{display:flex;list-style:none;gap:.4rem}
        .nav-link{color:rgba(255,255,255,.85);text-decoration:none;display:flex;align-items:center;gap:.4rem;
            padding:.5rem 1.1rem;border-radius:50px;font-size:.92rem;transition:all .25s;border:1px solid transparent}
        .nav-link:hover,.nav-link.active{background:var(--gold-dim);border-color:var(--gold);color:var(--gold);transform:translateY(-1px)}
        .menu-icon{display:none;font-size:1.6rem;color:#fff;cursor:pointer;background:none;border:none}

        /* ===== HERO ===== */
        header{
            min-height:80vh;
            background:
                linear-gradient(160deg,rgba(14,45,26,.82) 0%,rgba(14,45,26,.55) 55%,rgba(14,45,26,.88) 100%),
                url('https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?q=80&w=2000') center/cover no-repeat;
            background-attachment:fixed;
            display:flex;flex-direction:column;justify-content:center;align-items:center;
            color:#fff;text-align:center;
            border-bottom:4px solid var(--gold);
            position:relative;overflow:hidden;
            padding:4rem 2rem;
        }
        header::before{
            content:'';position:absolute;inset:0;
            background:radial-gradient(ellipse at 50% 90%,rgba(200,164,90,.15) 0%,transparent 60%);
            pointer-events:none;
        }
        /* Floating forest particles */
        .particle{
            position:absolute;width:6px;height:6px;border-radius:50%;
            background:rgba(200,164,90,.25);
            animation:float 8s ease-in-out infinite;
            pointer-events:none;
        }
        @keyframes float{0%,100%{transform:translateY(0) scale(1);opacity:.4}50%{transform:translateY(-40px) scale(1.5);opacity:.8}}

        .hero-badge{
            display:inline-flex;align-items:center;gap:8px;
            background:var(--gold-dim);border:1px solid var(--gold);
            color:var(--gold);padding:6px 20px;border-radius:50px;
            font-size:.85rem;font-weight:700;letter-spacing:1px;
            margin-bottom:1.5rem;position:relative;z-index:2;
            animation:fadeDown .6s ease both;
        }
        header h1{
            font-family:'Amiri',serif;
            font-size:clamp(3.2rem,9vw,6.5rem);
            font-weight:700;
            text-shadow:0 6px 30px rgba(0,0,0,.5);
            position:relative;z-index:2;
            animation:fadeDown .7s .1s ease both;
            line-height:1.1;
        }
        header h1 span{color:var(--gold)}
        .hero-sub{
            font-size:clamp(1.05rem,2.5vw,1.45rem);
            font-weight:300;opacity:.92;
            max-width:640px;
            position:relative;z-index:2;
            animation:fadeUp .7s .3s ease both;
            font-style:italic;
            color:var(--gold-light);
            margin:.6rem 0 .4rem;
            letter-spacing:.5px;
        }
        .hero-tagline{
            font-size:clamp(.95rem,2vw,1.2rem);
            opacity:.8;max-width:560px;
            position:relative;z-index:2;
            animation:fadeUp .7s .4s ease both;
        }
        .hero-divider{
            width:120px;height:2px;
            background:linear-gradient(90deg,transparent,var(--gold),transparent);
            margin:1.2rem auto;position:relative;z-index:2;
            animation:expandW .8s .4s ease both;
        }
        .hero-cta{
            display:flex;gap:1rem;margin-top:2rem;
            position:relative;z-index:2;
            animation:fadeUp .7s .5s ease both;
            flex-wrap:wrap;justify-content:center;
        }

        .btn-primary{
            background:linear-gradient(135deg,var(--gold),var(--gold-light));
            color:var(--forest);text-decoration:none;
            padding:.9rem 2.2rem;border-radius:50px;
            font-weight:700;font-size:1rem;
            transition:all .3s;border:none;cursor:pointer;
            display:inline-flex;align-items:center;gap:.5rem;
            box-shadow:0 8px 28px rgba(200,164,90,.4);
        }
        .btn-primary:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(200,164,90,.55)}
        .btn-outline{
            background:transparent;color:#fff;text-decoration:none;
            padding:.9rem 2.2rem;border-radius:50px;font-weight:600;font-size:1rem;
            border:1.5px solid rgba(255,255,255,.55);transition:all .3s;
            display:inline-flex;align-items:center;gap:.5rem;
        }
        .btn-outline:hover{border-color:#fff;background:rgba(255,255,255,.1);transform:translateY(-3px)}

        /* ===== STATS BAR ===== */
        .stats-bar{
            background:#fff;border-bottom:1px solid #eee;
            padding:1.3rem 2rem;
            display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;
            max-width:1000px;margin:0 auto;
            border-radius:0 0 var(--r) var(--r);
            box-shadow:0 10px 36px rgba(0,0,0,.09);
            position:relative;z-index:5;
        }
        .stat-item{text-align:center;padding:.5rem;border-left:1px solid #eee}
        .stat-item:last-child{border-left:none}
        .stat-num{font-size:1.65rem;font-weight:900;color:var(--forest);line-height:1}
        .stat-num span{color:var(--gold)}
        .stat-label{font-size:.78rem;color:#888;margin-top:3px}

        /* ===== MAIN WRAPPER ===== */
        .wrapper{max-width:1200px;margin:3rem auto 4rem;background:#fff;
            border-radius:28px;padding:clamp(2rem,5vw,4rem);
            box-shadow:var(--shadow-lg);position:relative}

        /* ===== SECTION HEADERS ===== */
        .section-header{text-align:center;margin-bottom:3.5rem}
        .section-tag{
            display:inline-block;background:var(--gold-dim);
            color:var(--gold);border:1px solid var(--gold);
            padding:4px 16px;border-radius:50px;font-size:.8rem;
            font-weight:700;letter-spacing:2px;margin-bottom:1rem;text-transform:uppercase;
        }
        .section-header h2{
            color:var(--forest);font-size:clamp(1.8rem,4.5vw,2.8rem);
            font-weight:900;font-family:'Amiri',serif;
            position:relative;display:inline-block;line-height:1.2;
        }
        .section-header h2::after{
            content:'';display:block;width:55%;height:3px;
            background:linear-gradient(90deg,var(--gold),transparent);
            margin:10px auto 0;border-radius:2px;
        }
        .section-header p{color:#777;font-size:1.05rem;margin-top:1rem;max-width:580px;margin-left:auto;margin-right:auto}

        /* ===== ITINERARY ===== */
        .itinerary{margin-top:2rem}
        .day-block{
            margin-bottom:3.5rem;
            border-right:5px solid var(--forest);
            padding-right:2rem;position:relative;
        }
        .day-block::before{
            content:'';position:absolute;right:-10px;top:0;
            width:16px;height:16px;background:var(--gold);
            border-radius:50%;border:3px solid #fff;
            box-shadow:0 0 0 3px var(--forest);
        }
        .day-block:nth-child(2){border-right-color:var(--gold)}
        .day-block:nth-child(2)::before{background:var(--forest)}
        .day-block:nth-child(3){border-right-color:var(--forest-lt)}
        .day-block:nth-child(3)::before{background:var(--forest-lt)}

        .day-num{
            background:linear-gradient(135deg,var(--forest),var(--forest-mid));
            color:var(--gold);padding:10px 24px;border-radius:50px;
            font-weight:700;font-size:1rem;
            display:inline-flex;align-items:center;gap:8px;
            margin-bottom:1.5rem;box-shadow:0 4px 18px rgba(14,45,26,.22);
        }
        .slot{
            display:grid;grid-template-columns:110px 1fr;gap:1.5rem;
            align-items:flex-start;padding:14px 16px;border-radius:12px;
            margin-bottom:8px;transition:background .2s;
        }
        .slot:hover{background:#f5f8f5}
        .slot-time{font-weight:700;color:var(--gold);font-size:1.05rem;padding-left:1rem;border-left:2px solid #eee}
        .slot-content{font-size:1rem;color:var(--text-mid)}
        .slot-content b{color:var(--forest)}

        /* ===== INFO CARDS ===== */
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:3rem}
        .card-dark{
            background:linear-gradient(145deg,var(--forest),var(--forest-mid));
            color:#fff;padding:2.5rem;border-radius:var(--r);
            border:1px solid rgba(200,164,90,.22);box-shadow:var(--shadow-lg);
            transition:transform .3s,box-shadow .3s;position:relative;overflow:hidden;
        }
        .card-dark::before{
            content:'';position:absolute;top:-50px;left:-50px;
            width:200px;height:200px;border-radius:50%;
            background:radial-gradient(circle,rgba(200,164,90,.18),transparent 70%);
        }
        .card-dark:hover{transform:translateY(-6px);box-shadow:0 32px 72px rgba(14,45,26,.28)}
        .card-dark h3{color:var(--gold);font-family:'Amiri',serif;font-size:1.6rem;margin-bottom:.75rem;position:relative;z-index:1}
        .price-display{
            font-size:3.8rem;font-weight:900;display:block;
            background:linear-gradient(135deg,var(--gold),var(--gold-light));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
            line-height:1.1;margin:.5rem 0;position:relative;z-index:1;
        }
        .price-display sup{font-size:1.3rem;font-weight:400;-webkit-text-fill-color:var(--gold)}
        .card-dark p{position:relative;z-index:1;opacity:.9;font-size:.95rem;margin-top:.75rem}
        .card-light{
            background:#f4f8f4;padding:2.5rem;border-radius:var(--r);
            border-right:6px solid var(--gold);box-shadow:0 8px 28px rgba(0,0,0,.07);
            transition:transform .3s;
        }
        .card-light:hover{transform:translateY(-6px)}
        .card-light h3{color:var(--forest);font-family:'Amiri',serif;font-size:1.5rem;margin-bottom:1.2rem}

        /* ===== SPECS LIST ===== */
        .specs-list{list-style:none}
        .specs-list li{
            padding:9px 0;position:relative;font-size:.97rem;color:var(--text-mid);
            border-bottom:1px solid rgba(0,0,0,.05);
            display:flex;align-items:flex-start;gap:8px;
        }
        .specs-list li::before{content:'✦';color:var(--gold);font-size:.65rem;margin-top:5px;flex-shrink:0}

        /* ===== GRAND FESTIVALS ===== */
        .festivals-section{margin-top:4rem}
        .festivals-intro{
            background:linear-gradient(135deg,var(--forest),var(--forest-mid));
            color:#fff;border-radius:var(--r);padding:3rem;
            margin-bottom:2.5rem;position:relative;overflow:hidden;
            border:1px solid rgba(200,164,90,.2);
        }
        .festivals-intro::before{
            content:'';position:absolute;inset:0;
            background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8a45a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            pointer-events:none;
        }
        .festivals-intro h3{
            font-family:'Amiri',serif;font-size:2.2rem;color:var(--gold);
            margin-bottom:1rem;position:relative;z-index:1;
        }
        .festivals-intro p{opacity:.9;font-size:1.05rem;position:relative;z-index:1;max-width:720px}
        .festival-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
        .festival-card{
            background:#fff;border-radius:var(--r);overflow:hidden;
            box-shadow:0 12px 36px rgba(0,0,0,.1);
            transition:transform .35s,box-shadow .35s;
            border:1px solid #eee;
        }
        .festival-card:hover{transform:translateY(-8px);box-shadow:0 24px 60px rgba(14,45,26,.18)}
        .festival-card-img{
            height:180px;display:flex;align-items:center;justify-content:center;
            font-size:4rem;position:relative;overflow:hidden;
        }
        .festival-card-img.palmyra{background:linear-gradient(135deg,#1a0e05,#3d2010)}
        .festival-card-img.bosra{background:linear-gradient(135deg,#0a0a1a,#1a1a40)}
        .festival-card-img.krak{background:linear-gradient(135deg,#0e1a08,#1e3a10)}
        .festival-card-img.ugarit{background:linear-gradient(135deg,#050e1a,#102040)}
        .festival-card-img.aleppo{background:linear-gradient(135deg,#1a0e00,#3d2800)}
        .festival-card-img.latakia{background:linear-gradient(135deg,#001a1a,#003333)}
        .festival-card-img::before{
            content:'';position:absolute;inset:0;
            background:radial-gradient(circle at 50% 120%,rgba(200,164,90,.35),transparent 60%);
        }
        .festival-card-img span{position:relative;z-index:2}
        .festival-badge{
            position:absolute;top:12px;right:12px;z-index:3;
            background:var(--gold);color:var(--forest);
            padding:3px 12px;border-radius:50px;font-size:.72rem;font-weight:700;
        }
        .festival-body{padding:1.5rem}
        .festival-body h4{color:var(--forest);font-family:'Amiri',serif;font-size:1.25rem;margin-bottom:.5rem}
        .festival-body p{color:#666;font-size:.9rem;margin-bottom:1rem}
        .festival-perks{list-style:none;display:flex;flex-direction:column;gap:5px}
        .festival-perks li{
            font-size:.85rem;color:var(--forest-mid);
            display:flex;align-items:center;gap:6px;font-weight:600;
        }
        .festival-perks li i{color:var(--gold);font-size:.8rem}
        .bike-promo{
            background:linear-gradient(135deg,var(--gold),var(--gold-light));
            color:var(--forest);padding:.35rem 1rem;border-radius:50px;
            font-size:.78rem;font-weight:700;display:inline-flex;align-items:center;gap:5px;
            margin-top:.8rem;
        }

        /* ===== GRAND MARCH ===== */
        .march-section{
            background:linear-gradient(160deg,var(--forest) 0%,var(--forest-lt) 100%);
            color:#fff;border-radius:24px;padding:3.5rem;margin-top:3rem;
            position:relative;overflow:hidden;
        }
        .march-section::after{
            content:'';position:absolute;
            top:-80px;left:-80px;width:400px;height:400px;
            border-radius:50%;background:radial-gradient(circle,rgba(200,164,90,.1),transparent 65%);
            pointer-events:none;
        }
        .march-header{display:flex;align-items:center;gap:1.5rem;margin-bottom:2.5rem;flex-wrap:wrap}
        .march-icon{
            width:80px;height:80px;background:var(--gold-dim);border:2px solid var(--gold);
            border-radius:50%;display:flex;align-items:center;justify-content:center;
            font-size:2.2rem;color:var(--gold);flex-shrink:0;position:relative;z-index:1;
        }
        .march-title{position:relative;z-index:1}
        .march-title h3{font-family:'Amiri',serif;font-size:2rem;color:var(--gold);line-height:1.2}
        .march-title p{opacity:.8;font-size:1rem;margin-top:.3rem}
        .route-map{
            background:rgba(255,255,255,.06);border:1px solid rgba(200,164,90,.2);
            border-radius:16px;padding:2rem;margin:2rem 0;position:relative;z-index:1;
        }
        .route-stops{
            display:flex;align-items:center;gap:0;overflow-x:auto;padding:.5rem 0;
        }
        .route-stop{text-align:center;min-width:120px;flex-shrink:0}
        .stop-dot{
            width:42px;height:42px;border-radius:50%;
            background:linear-gradient(135deg,var(--gold),var(--gold-light));
            color:var(--forest);display:flex;align-items:center;justify-content:center;
            font-size:1.1rem;margin:0 auto .5rem;font-weight:700;
            box-shadow:0 4px 16px rgba(200,164,90,.4);
        }
        .stop-name{font-size:.8rem;color:rgba(255,255,255,.85);font-weight:600}
        .stop-sub{font-size:.7rem;color:rgba(200,164,90,.7)}
        .route-line{
            flex:1;height:2px;min-width:30px;
            background:linear-gradient(90deg,var(--gold),rgba(200,164,90,.3));
            position:relative;
        }
        .route-line::after{
            content:'›';color:var(--gold);position:absolute;
            top:-11px;right:-3px;font-size:1.2rem;
        }
        .march-details{
            display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;
            position:relative;z-index:1;
        }
        .march-detail{background:rgba(255,255,255,.07);border-radius:12px;padding:1.5rem;border:1px solid rgba(200,164,90,.15)}
        .march-detail i{color:var(--gold);font-size:1.6rem;margin-bottom:.7rem}
        .march-detail h4{color:var(--gold-light);font-size:1rem;margin-bottom:.4rem}
        .march-detail p{opacity:.8;font-size:.9rem}
        .world-record{
            display:flex;align-items:center;gap:1.5rem;
            background:rgba(200,164,90,.12);border:2px solid var(--gold);
            border-radius:16px;padding:1.5rem 2rem;margin-top:2rem;
            position:relative;z-index:1;flex-wrap:wrap;
        }
        .wr-icon{font-size:3rem}
        .wr-text h4{color:var(--gold);font-family:'Amiri',serif;font-size:1.4rem}
        .wr-text p{opacity:.85;font-size:.95rem;margin-top:.3rem}

        /* ===== SUSTAINABILITY ===== */
        .sustain-section{margin-top:4rem}
        .sustain-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.2rem;margin-top:2rem}
        .sustain-card{
            background:#fff;border-radius:16px;padding:1.8rem;
            text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.07);
            border-bottom:4px solid var(--gold);transition:transform .3s;
            }
        .sustain-card:hover{transform:translateY(-5px)}
        .sustain-card i{font-size:2rem;color:var(--forest);margin-bottom:.8rem;display:block}
        .sustain-card h4{color:var(--forest);font-size:1rem;font-weight:700;margin-bottom:.4rem}
        .sustain-card p{color:#777;font-size:.85rem}

        /* ===== REVENUE MODEL ===== */
        .revenue-section{
            background:linear-gradient(135deg,#f9f6ef,#f0f5f0);
            border-radius:24px;padding:3rem;margin-top:3rem;
            border-right:6px solid var(--forest);
        }
        .revenue-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:2rem}
        .revenue-item{
            display:flex;gap:1rem;align-items:flex-start;
            background:#fff;border-radius:12px;padding:1.5rem;
            box-shadow:0 4px 16px rgba(0,0,0,.06);
        }
        .rev-icon{
            width:48px;height:48px;border-radius:12px;
            background:linear-gradient(135deg,var(--forest),var(--forest-mid));
            color:var(--gold);display:flex;align-items:center;justify-content:center;
            font-size:1.3rem;flex-shrink:0;
        }
        .rev-text h4{color:var(--forest);font-weight:700;margin-bottom:.3rem}
        .rev-text p{color:#666;font-size:.9rem}

        /* ===== APP SECTION ===== */
        .app-section{
            background:linear-gradient(135deg,var(--forest),var(--forest-mid));
            color:#fff;border-radius:24px;padding:3rem;margin-top:3rem;
            display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;
        }
        .app-content h3{font-family:'Amiri',serif;font-size:2rem;color:var(--gold);margin-bottom:1rem}
        .app-content p{opacity:.85;margin-bottom:1.5rem}
        .app-features{list-style:none;display:flex;flex-direction:column;gap:.7rem}
        .app-features li{display:flex;align-items:center;gap:.7rem;font-size:.97rem}
        .app-features li i{color:var(--gold);font-size:.9rem}
        .app-mockup-box{
            background:rgba(255,255,255,.08);border:2px solid rgba(200,164,90,.3);
            border-radius:24px;padding:2.5rem;text-align:center;
            box-shadow:0 0 80px rgba(200,164,90,.1);
        }
        .phone-icon{font-size:5rem;color:var(--gold);margin-bottom:1rem;
            animation:pulse 3s ease-in-out infinite;display:block}
        @keyframes pulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(200,164,90,.3)}50%{transform:scale(1.05);box-shadow:0 0 0 14px rgba(200,164,90,0)}}

        /* ===== BOOKING ===== */
        .booking-section{
            background:linear-gradient(135deg,#eaf0ea,#dde8dd);
            padding:4rem 2rem;border-radius:24px;margin-top:3rem;
        }
        .booking-container{max-width:820px;margin:0 auto;background:#fff;border-radius:var(--r);box-shadow:var(--shadow-lg);overflow:hidden}
        .booking-header{
            background:linear-gradient(135deg,var(--forest),var(--forest-mid));
            padding:2rem 2.5rem;text-align:center;border-bottom:3px solid var(--gold);
        }
        .booking-header h2{color:var(--gold);font-family:'Amiri',serif;font-size:1.9rem;margin-bottom:.25rem}
        .booking-header p{color:rgba(255,255,255,.75);font-size:.95rem}
        .booking-body{padding:2.5rem}
        .form-section{margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid #eee}
        .form-section:last-of-type{border-bottom:none;margin-bottom:0}
        .form-section-title{display:flex;align-items:center;gap:8px;color:var(--forest);font-size:1.1rem;font-weight:700;margin-bottom:1.2rem}
        .form-section-title i{color:var(--gold)}
        .form-group{margin-bottom:1.2rem}
        .form-group label{display:block;color:var(--forest);font-weight:600;font-size:.9rem;margin-bottom:6px}
        .input-wrapper{position:relative;display:flex;align-items:center}
        .input-icon{position:absolute;right:14px;color:var(--gold);font-size:1rem;pointer-events:none;z-index:1}
        .form-group input,.form-group textarea,.form-group select{
            width:100%;padding:11px 40px 11px 14px;
            border:1.5px solid #ddd;border-radius:10px;
            font-family:'Cairo',sans-serif;font-size:.97rem;
            color:var(--text-dark);background:#fff;
            transition:border-color .25s,box-shadow .25s;
            appearance:none;-webkit-appearance:none;
        }
        .form-group input:focus,.form-group textarea:focus,.form-group select:focus{
            outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(200,164,90,.14);
        }
        .form-group input:valid:not(:placeholder-shown){border-color:#27ae60}
        .form-group textarea{resize:vertical;min-height:90px}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
        .price-summary{
            background:linear-gradient(135deg,var(--forest),var(--forest-mid));
            color:#fff;padding:1.5rem 2rem;border-radius:14px;margin:1.5rem 0;
        }
        .price-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;font-size:.97rem;border-bottom:1px solid rgba(255,255,255,.08)}
        .price-row:last-child{border-bottom:none;padding-top:12px;font-size:1.2rem;font-weight:700;color:var(--gold)}
        .price-row i{margin-left:6px;color:var(--gold);font-size:.9rem}
        .price-row strong{font-weight:600}
        .price-row:last-child strong{color:var(--gold);font-weight:900;font-size:1.3rem}
        .terms-box{display:flex;align-items:flex-start;gap:10px;padding:14px 16px;background:#f8faf8;border-radius:10px;margin:1.2rem 0}
        .terms-box input[type="checkbox"]{width:18px;height:18px;accent-color:var(--forest);cursor:pointer;flex-shrink:0;margin-top:2px;padding:0;border:none}
        .terms-box label{cursor:pointer;font-size:.9rem;color:#555}
        .terms-box a{color:var(--gold);text-decoration:none;font-weight:600}
        .submit-btn{
            width:100%;background:linear-gradient(135deg,var(--forest),var(--forest-mid));
            color:#fff;border:none;padding:1rem 2rem;border-radius:12px;
            font-family:'Cairo',sans-serif;font-size:1.1rem;font-weight:700;
            cursor:pointer;transition:all .3s;display:flex;align-items:center;
            justify-content:center;gap:10px;
            box-shadow:0 6px 22px rgba(14,45,26,.28);
            border:1px solid rgba(200,164,90,.3);
        }
        .submit-btn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(14,45,26,.38)}
        .submit-btn i{color:var(--gold)}
        .field-error{color:#c0392b;font-size:.82rem;margin-top:4px;display:none}
        .field-error.visible{display:block}

        /* ===== FOOTER ===== */
        footer{
            background:linear-gradient(135deg,var(--forest),var(--forest-mid));
            color:#fff;padding:3.5rem 2rem;text-align:center;
            border-top:4px solid var(--gold);
        }
        .footer-logo{font-family:'Amiri',serif;font-size:2.3rem;color:var(--gold);
            margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;gap:10px}
        footer p{margin:6px 0;opacity:.85;font-size:.95rem}
        footer p b{color:var(--gold)}
        .footer-contact{margin:1rem 0;font-size:1.05rem;font-weight:600;color:var(--gold)}
        .footer-social{margin-top:1.5rem;display:flex;gap:12px;justify-content:center}
        .social-btn{
            width:44px;height:44px;background:rgba(200,164,90,.15);color:var(--gold);
            border:1px solid rgba(200,164,90,.4);border-radius:50%;
            display:flex;align-items:center;justify-content:center;
            text-decoration:none;font-size:1.05rem;transition:all .25s;
        }
        .social-btn:hover{background:var(--gold);color:var(--forest);transform:translateY(-3px)}

        /* ===== COMMUNITY GRID ===== */
        .community-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:2rem}
        .community-card{
            background:#f4f8f4;border-radius:var(--r);padding:2rem;
            border-right:5px solid var(--gold);box-shadow:0 8px 24px rgba(0,0,0,.07);
            transition:transform .3s;
        }
        .community-card:hover{transform:translateY(-5px)}
        .community-card h3{color:var(--forest);font-family:'Amiri',serif;font-size:1.4rem;margin-bottom:.75rem}

        /* ===== NOTIFICATIONS / SCROLL ===== */
        #toast{
            position:fixed;bottom:24px;left:24px;
            background:var(--forest);color:#fff;
            padding:14px 22px;border-radius:12px;border-right:4px solid var(--gold);
            font-size:.95rem;font-weight:600;z-index:9999;
            box-shadow:0 8px 28px rgba(0,0,0,.28);
            display:flex;align-items:center;gap:10px;
            transform:translateY(100px);opacity:0;
            transition:all .4s cubic-bezier(0.175,.885,.32,1.275);
            pointer-events:none;
        }
        #toast.show{transform:translateY(0);opacity:1}
        #toast i{color:var(--gold)}
        #scrollTop{
            position:fixed;bottom:24px;right:24px;
            width:46px;height:46px;background:var(--forest);color:var(--gold);
            border:1px solid rgba(200,164,90,.4);border-radius:50%;
            display:flex;align-items:center;justify-content:center;
            cursor:pointer;font-size:1rem;
            box-shadow:0 4px 16px rgba(0,0,0,.22);transition:all .3s;
            opacity:0;pointer-events:none;z-index:999;
        }
        #scrollTop.visible{opacity:1;pointer-events:auto}
        #scrollTop:hover{transform:translateY(-3px);background:var(--gold);color:var(--forest)}

        /* ===== ANIMATIONS ===== */
        @keyframes fadeDown{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes expandW{from{width:0;opacity:0}to{width:120px;opacity:1}}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease}
        .reveal.visible{opacity:1;transform:translateY(0)}

        /* ===== RESPONSIVE ===== */
        @media(max-width:1024px){
            .festival-grid{grid-template-columns:repeat(2,1fr)}
            .march-details{grid-template-columns:repeat(2,1fr)}
            .sustain-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:900px){
            .stats-bar{grid-template-columns:repeat(3,1fr)}
            .app-section{grid-template-columns:1fr}
        }
        @media(max-width:768px){
            .menu-icon{display:block}
            .nav-menu{
                position:absolute;top:100%;right:0;left:0;
                flex-direction:column;background:var(--forest);
                border-top:2px solid var(--gold-dim);padding:.5rem 0;
                display:none;gap:0;
            }
            .nav-menu.open{display:flex}
            .nav-link{padding:.9rem 1.5rem;border-radius:0;font-size:1rem}
            .info-grid{grid-template-columns:1fr}
            .form-row{grid-template-columns:1fr}
            .community-grid{grid-template-columns:1fr}
            .festival-grid{grid-template-columns:1fr}
            .revenue-grid{grid-template-columns:1fr}
            .march-details{grid-template-columns:1fr}
            header{background-attachment:scroll;min-height:65vh}
        }
        @media(max-width:540px){
            .stats-bar{grid-template-columns:repeat(2,1fr);border-radius:0}
            .stat-item{border-left:none;border-bottom:1px solid #eee}
            .sustain-grid{grid-template-columns:1fr 1fr}
        }
    </style>
</head>
<body>

<!-- NAVBAR -->
<nav id="navbar">
    <a href="#home" class="nav-logo" aria-label="أُفق">
        <span class="logo-text">أُفق</span>
        <span class="logo-sub">HORIZON</span>
    </a>
    <ul class="nav-menu" id="navMenu" role="menubar">
        <li><a href="#home" class="nav-link active" role="menuitem"><i class="fas fa-home"></i> الرئيسية</a></li>
        <li><a href="#itinerary" class="nav-link" role="menuitem"><i class="fas fa-map-location-dot"></i> المسار</a></li>
        <li><a href="#festivals" class="nav-link" role="menuitem"><i class="fas fa-star"></i> المهرجانات</a></li>
        <li><a href="#march" class="nav-link" role="menuitem"><i class="fas fa-bicycle"></i> المسير الكبير</a></li>
        <li><a href="#community" class="nav-link" role="menuitem"><i class="fas fa-users"></i> المجتمع</a></li>
        <li><a href="#booking" class="nav-link" role="menuitem"><i class="fas fa-calendar-check"></i> احجز الآن</a></li>
    </ul>
    <button class="menu-icon" id="menuIcon" aria-label="القائمة" aria-expanded="false">
        <i class="fas fa-bars"></i>
    </button>
</nav>

<!-- HERO -->
<header id="home">
    <!-- Particles -->
    <div class="particle" style="top:20%;left:15%;animation-delay:0s"></div>
    <div class="particle" style="top:60%;left:80%;animation-delay:2s"></div>
    <div class="particle" style="top:40%;left:50%;animation-delay:4s"></div>
    <div class="particle" style="top:75%;left:30%;animation-delay:1.5s"></div>
    <div class="particle" style="top:15%;left:70%;animation-delay:3s"></div>

    <div class="hero-badge"><i class="fas fa-leaf"></i> السياحة المستدامة · سورية 2026</div>
    <h1>أُفق | <span>HORIZON</span></h1>
    <div class="hero-divider"></div>
    <p class="hero-sub">اركب. اكتشف. أبقِ الأثر جميلاً.</p>
    <p class="hero-tagline">رحلات دراجات هوائية في قلب الطبيعة السورية — حيث تلتقي المغامرة بالاستدامة</p>
    <div class="hero-cta">
        <a href="#booking" class="btn-primary"><i class="fas fa-calendar-check"></i> احجز رحلتك</a>
        <a href="#itinerary" class="btn-outline"><i class="fas fa-route"></i> اكتشف المسار</a>
        <a href="#festivals" class="btn-outline"><i class="fas fa-star"></i> المهرجانات الكبرى</a>
    </div>
</header>

<!-- STATS BAR -->
<div class="stats-bar">
    <div class="stat-item">
        <div class="stat-num">3<span>أيام</span></div>
        <div class="stat-label">مدة الرحلة</div>
    </div>
    <div class="stat-item">
        <div class="stat-num">3500<span>ل.س</span></div>
        <div class="stat-label">سعر الفرد</div>
    </div>
    <div class="stat-item">
        <div class="stat-num">3<span>+</span></div>
        <div class="stat-label">مواقع أثرية</div>
    </div>
    <div class="stat-item">
        <div class="stat-num">كل<span> شهرين </span></div>
        <div class="stat-label">مسير وطني</div>
    </div>
    <div class="stat-item">
        <div class="stat-num">0<span>كربون</span></div>
        <div class="stat-label">أثر بيئي</div>
    </div>
</div>

<!-- MAIN WRAPPER -->
<main class="wrapper">

    <!-- ITINERARY -->
    <section id="itinerary" aria-labelledby="itin-h">
        <div class="section-header reveal">
            <div class="section-tag">البرنامج السياحي</div>
            <h2 id="itin-h">رحلة ثلاثة أيام في قلب الغابات</h2>
            <p>مغامرة حقيقية على دراجة هوائية عبر أجمل المسارات الحرجية والأثرية في سورية</p>
        </div>
        <div class="itinerary">

            <!-- DAY 1 -->
            <div class="day-block reveal">
                <span class="day-num">
                    <i class="fas fa-bicycle"></i>
                    اليوم الأول — الانطلاق: من أعماق الغابة إلى عبق التاريخ
                </span>
                <div class="slot">
                    <div class="slot-time">08:30 ص</div>
                    <div class="slot-content">
                        <b>نقطة الانطلاق (الناصرة — غابات وادي النصارى):</b>
                        تجمّع الفريق بين أشجار السنديان والصنوبر. فحص الدراجات وتوزيع خريطة «أُفق» التفاعلية. الانطلاق على مسارات ترابية داخل الغابة.
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">11:00 ص</div>
                    <div class="slot-content">
                        <b>قيادة داخل الغابة (مسار وادي قنديل):</b>
                        30 كم من الطرق الحرجية بين الأشجار العالية وشلالات مياه الينابيع الطبيعية. توقف للتصوير والراحة.
                        <i class="fas fa-tree" style="color:var(--forest);margin-right:5px"></i>
                        </div>
                </div>
                <div class="slot">
                    <div class="slot-time">01:30 ظ</div>
                    <div class="slot-content">
                        <b>محطة تاريخية (قلعة الحصن):</b>
                        زيارة واحدة من أعظم قلاع الصليبيين في العالم. جولة إرشادية ومرشد متخصص.
                        <i class="fas fa-chess-rook" style="color:var(--gold);margin-right:5px"></i>
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">04:00 م</div>
                    <div class="slot-content">
                        <b>غداء ريفي (إطلالة بانوراما):</b>
                        وجبة أصيلة من مطبخ ريفي يطل على الوادي الأخضر.
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">06:30 م</div>
                    <div class="slot-content">
                        <b>مخيم الغابة (سد المزينة):</b>
                        التخييم على ضفاف البحيرة بين الأشجار. نار الحطب وتأمل النجوم وموسيقى حية.
                        <i class="fas fa-campground" style="color:var(--forest-lt);margin-right:5px"></i>
                    </div>
                </div>
            </div>

            <!-- DAY 2 -->
            <div class="day-block reveal">
                <span class="day-num" style="background:linear-gradient(135deg,var(--gold),var(--gold-light));color:var(--forest)">
                    <i class="fas fa-mountain-sun"></i>
                    اليوم الثاني — القمة: أعمق في الغابة وأعلى المرتفعات
                </span>
                <div class="slot">
                    <div class="slot-time">07:30 ص</div>
                    <div class="slot-content">
                        <b>فطور المزرعة الحرجية:</b>
                        منتجات طازجة من مزارع محلية صديقة للبيئة — لبن، زيتون، خبز طابون.
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">09:30 ص</div>
                    <div class="slot-content">
                        <b>تسلق حرجي (مشتى الحلو — 1400م):</b>
                        مسار تصاعدي في قلب الغابة الحرجية. إطلالات استثنائية على الأودية والسهول.
                        <i class="fas fa-bicycle" style="color:var(--gold);margin-right:5px"></i>
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">12:00 ظ</div>
                    <div class="slot-content">
                        <b>عجائب الأرض (مغارة الضوايات):</b>
                        استكشاف المغارة الطبيعية بصواعدها ونوازلها الرائعة.
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">03:30 ظ</div>
                    <div class="slot-content">
                        <b>النزول الذهبي نحو الساحل:</b>
                        انسياب حر بالدراجات من الجبال الحرجية نحو البحر المتوسط مع مشهد الغروب.
                        <i class="fas fa-route" style="color:var(--forest-lt);margin-right:5px"></i>
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">06:30 م</div>
                    <div class="slot-content">
                        <b>إقامة ساحلية (طرطوس — فندق بيئي):</b>
                        توزيع الغرف في فندق يعمل بالطاقة الشمسية على بعد أمتار من البحر.
                    </div>
                </div>
            </div>

            <!-- DAY 3 -->
            <div class="day-block reveal">
                <span class="day-num" style="background:linear-gradient(135deg,var(--forest-lt),#2e6b40);color:#fff">
                    <i class="fas fa-trophy"></i>
                    اليوم الثالث — الختام المجيد: البحر والانتصار
                </span>
                <div class="slot">
                    <div class="slot-time">08:00 ص</div>
                    <div class="slot-content">
                        <b>فطور بحري وتصوير ختامي:</b>
                        جلسة تصوير جماعية مع الدراجات على شاطئ أرواد.
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">10:00 ص</div>
                    <div class="slot-content">
                        <b>زيارة جزيرة أرواد:</b>
                        جولة في أقدم مدينة مأهولة على وجه الأرض — على متن قارب من الشاطئ.
                        <i class="fas fa-ship" style="color:var(--gold);margin-right:5px"></i>
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">01:00 ظ</div>
                    <div class="slot-content">
                        <b>حفل الختام (شاطئ طرطوس):</b>
                        توزيع الميداليات وشهادات المشاركة. تصوير درون للمجموعة. عرض الفيديو التوثيقي للرحلة.
                        <i class="fas fa-medal" style="color:var(--gold);margin-right:5px"></i>
                    </div>
                </div>
                <div class="slot">
                    <div class="slot-time">04:00 م</div>
                    <div class="slot-content">
                        <b>العودة الآمنة:</b>
                        نقل بسيارات الدعم إلى نقطة الانطلاق. شكر وتوديع المجموعة.
                    </div>
                </div>
            </div>

        </div><!-- /itinerary -->

        <!-- INFO CARDS -->
        <div class="info-grid reveal">
            <div class="card-dark">
                <h3><i class="fas fa-tag"></i> باقة ٣ أيام الكاملة</h3>
                <span class="price-display">3500 <sup>ل.س</sup></span>
                <p>شاملة: استئجار الدراجة · سيارة دعم 4×4 · جميع الوجبات · مبيت ليلتين · تأمين شامل · مرشد سياحي · تصوير درون احترافي.</p>
            </div>
            <div class="card-light">
                <h3><i class="fas fa-cogs"></i> دعم لوجستي عالمي المستوى</h3>
                <ul class="specs-list">
                    <li><b>الدراجات:</b> دراجات هجينة ممتازة مع خوذات وتجهيزات أمان</li>
                    <li><b>الصيانة:</b> ميكانيكي متخصص ومعه قطع غيار كاملة</li>
                    <li><b>التوثيق:</b> فريق تصوير بدرون ومصور متخصص</li>
                    <li><b>التأمين:</b> تأمين شامل على المشاركين والمعدات</li>
                    <li><b>الإسعاف:</b> طاقم طبي أولي على طول المسار</li>
                    <li><b>الإرشاد:</b> مرشد سياحي معتمد يتقن العربية والإنجليزية</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- GRAND FESTIVALS -->
    <section id="festivals" class="festivals-section" aria-labelledby="fest-h">
        <div class="section-header reveal">
            <div class="section-tag">المهرجانات الكبرى</div>
            <h2 id="fest-h">مهرجانات أُفق في المواقع الأثرية</h2>
            <p>تجارب عالمية المستوى في قلب الحضارة السورية — مع مزايا حصرية لركاب الدراجات</p>
        </div>

        <div class="festivals-intro reveal">
            <h3><i class="fas fa-star"></i> الفكرة التي تغيّر السياحة</h3>
            <p>
                مهرجانات ضخمة على غرار <strong>Coachella</strong> و<strong>Tomorrowland</strong> و<strong>Burning Man</strong> — 
                لكنها سورية الروح، أثرية المكان، بيئية الأثر. 
                كل مهرجان يُقام في موقع تاريخي مختلف، ويمنح الحاضرون على دراجاتهم الهوائية 
                امتيازات ومزايا لا تُقدَّر بثمن.
            </p>
        </div>

        <div class="festival-grid reveal">

            <div class="festival-card">
                <div class="festival-card-img palmyra">
                    <span>🏛️</span>
                    <div class="festival-badge">مارس</div>
                </div>
                <div class="festival-body">
                    <h4>مهرجان تدمر الحضاري</h4>
                    <p>ليالٍ ثقافية بين عمدة تدمر الرومانية — موسيقى تراثية، عروض ضوء ليزر على الأعمدة، سوق حرفي.</p>
                    <ul class="festival-perks">
                        <li><i class="fas fa-bicycle"></i> دخول مجاني للقادمين على دراجة</li>
                        <li><i class="fas fa-camera"></i> جلسة تصوير حصرية داخل المعبد</li>
                        <li><i class="fas fa-ticket"></i> تخفيض 40% على إقامة اليوم الثاني</li>
                    </ul>
                    <div class="bike-promo"><i class="fas fa-bicycle"></i> امتياز راكب الدراجة</div>
                </div>
            </div>

            <div class="festival-card">
                <div class="festival-card-img bosra">
                    <span>🎭</span>
                    <div class="festival-badge">مايو</div>
                </div>
                <div class="festival-body">
                    <h4>ليالي بصرى المسرحية</h4>
                    <p>عروض مسرحية وأوبرالية داخل المدرج الروماني في بصرى — أحد أكمل المدرجات في العالم.</p>
                    <ul class="festival-perks">
                        <li><i class="fas fa-bicycle"></i> مقاعد الصف الأول لركاب الدراجات</li>
                        <li><i class="fas fa-utensils"></i> عشاء روماني تاريخي</li>
                        <li><i class="fas fa-music"></i> حفلة موسيقية ما بعد العرض</li>
                    </ul>
                    <div class="bike-promo"><i class="fas fa-bicycle"></i> امتياز راكب الدراجة</div>
                </div>
            </div>

            <div class="festival-card">
                <div class="festival-card-img krak">
                    <span>⚔️</span>
                    <div class="festival-badge">يوليو</div>
                </div>
                <div class="festival-body">
                    <h4>كرنفال الحصن الوسيط</h4>
                    <p>أسواق وسيطية، عروض فروسية، حرف يدوية أصيلة داخل حوش قلعة الحصن.</p>
                    <ul class="festival-perks">
                        <li><i class="fas fa-bicycle"></i> دخول VIP من البوابة الرئيسية</li>
                        <li><i class="fas fa-shield-halved"></i> جولة ليلية خاصة بين الأبراج</li>
                        <li><i class="fas fa-star"></i> درع تذكارية مجانية</li>
                    </ul>
                    <div class="bike-promo"><i class="fas fa-bicycle"></i> امتياز راكب الدراجة</div>
                </div>
            </div>

            <div class="festival-card">
                <div class="festival-card-img ugarit">
                    <span>📜</span>
                    <div class="festival-badge">سبتمبر</div>
                </div>
                <div class="festival-body">
                    <h4>مهرجان أوغاريت — فجر الكتابة</h4>
                    <p>احتفاء بأول أبجدية في التاريخ. ورش فنية، كاليغرافيا، سوق ثقافي على شاطئ رأس شمرا.</p>
                    <ul class="festival-perks">
                        <li><i class="fas fa-bicycle"></i> ختم أوغاريتي تذكاري حصري</li>
                        <li><i class="fas fa-palette"></i> ورشة كاليغرافيا مجانية</li>
                        <li><i class="fas fa-book"></i> نسخة من أقدم نص أبجدي</li>
                    </ul>
                    <div class="bike-promo"><i class="fas fa-bicycle"></i> امتياز راكب الدراجة</div>
                </div>
            </div>
            <div class="festival-card">
                <div class="festival-card-img aleppo">
                    <span>🕌</span>
                    <div class="festival-badge">نوفمبر</div>
                </div>
                <div class="festival-body">
                    <h4>ليالي حلب في القلعة</h4>
                    <p>مهرجان موسيقى وتراث في قلعة حلب المهيبة. موشحات أندلسية ومقام حلبي وعرض ضوء ليزر.</p>
                    <ul class="festival-perks">
                        <li><i class="fas fa-bicycle"></i> استقبال خاص في البوابة الكبرى</li>
                        <li><i class="fas fa-moon"></i> ليلة مبيت داخل القلعة</li>
                        <li><i class="fas fa-guitar"></i> حفل موسيقي حصري</li>
                    </ul>
                    <div class="bike-promo"><i class="fas fa-bicycle"></i> امتياز راكب الدراجة</div>
                </div>
            </div>

            <div class="festival-card">
                <div class="festival-card-img latakia">
                    <span>🌊</span>
                    <div class="festival-badge">يناير</div>
                </div>
                <div class="festival-body">
                    <h4>كرنفال الساحل الأزرق</h4>
                    <p>مهرجان شاطئي في اللاذقية — رياضات مائية، موسيقى، مسار دراجات على الكورنيش.</p>
                    <ul class="festival-perks">
                        <li><i class="fas fa-bicycle"></i> ممر دراجات حصري على الكورنيش</li>
                        <li><i class="fas fa-sailboat"></i> رحلة بحرية مجانية</li>
                        <li><i class="fas fa-umbrella-beach"></i> شاليه بحري لليلة واحدة</li>
                    </ul>
                    <div class="bike-promo"><i class="fas fa-bicycle"></i> امتياز راكب الدراجة</div>
                </div>
            </div>

        </div><!-- /festival-grid -->
    </section>

    <!-- GRAND MARCH -->
    <section id="march" aria-labelledby="march-h">
        <div class="march-section reveal">
            <div class="march-header">
                <div class="march-icon"><i class="fas fa-bicycle"></i></div>
                <div class="march-title">
                    <h3 id="march-h">المسير الوطني الكبير — الجنوب إلى الشمال</h3>
                    <p>كل شهرين · من درعا إلى حلب · أطول مسير سياحي بيئي في تاريخ المنطقة</p>
                </div>
            </div>

            <div class="route-map">
                <p style="color:rgba(255,255,255,.7);font-size:.85rem;margin-bottom:1rem;text-align:center">
                    <i class="fas fa-route" style="color:var(--gold)"></i> المسار الوطني الكامل — 650 كم
                </p>
                <div class="route-stops">
                    <div class="route-stop">
                        <div class="stop-dot">🏁</div>
                        <div class="stop-name">درعا</div>
                        <div class="stop-sub">نقطة الانطلاق</div>
                    </div>
                    <div class="route-line"></div>
                    <div class="route-stop">
                        <div class="stop-dot">🏛️</div>
                        <div class="stop-name">بصرى</div>
                        <div class="stop-sub">التراث الروماني</div>
                    </div>
                    <div class="route-line"></div>
                    <div class="route-stop">
                        <div class="stop-dot">🌸</div>
                        <div class="stop-name">دمشق</div>
                        <div class="stop-sub">القلب النابض</div>
                    </div>
                    <div class="route-line"></div>
                    <div class="route-stop">
                        <div class="stop-dot">🌲</div>
                        <div class="stop-name">حمص</div>
                        <div class="stop-sub">أحراش الغاب</div>
                    </div>
                    <div class="route-line"></div>
                    <div class="route-stop">
                        <div class="stop-dot">⛺</div>
                        <div class="stop-name">حماة</div>
                        <div class="stop-sub">النواعير التاريخية</div>
                    </div>
                    <div class="route-line"></div>
                    <div class="route-stop">
                        <div class="stop-dot">🏆</div>
                        <div class="stop-name">حلب</div>
                        <div class="stop-sub">الوصول المجيد</div>
                    </div>
                </div>
            </div>

            <div class="march-details">
                <div class="march-detail">
                    <i class="fas fa-calendar-alt"></i>
                    <h4>الجدول الزمني</h4>
                    <p>مسير دوري كل شهرين. مدة المسير 7 أيام كاملة. انطلاق في فجر اليوم الأول من درعا.</p>
                </div>
                <div class="march-detail">
                    <i class="fas fa-users"></i>
                    <h4>مشاركة جماعية</h4>
                    <p>مفتوح لجميع الفئات العمرية. تصنيفات متعددة (احتراف، هواة، عائلات). لا حدّ أقصى للمشاركين.</p>
                </div>
                <div class="march-detail">
                    <i class="fas fa-shield-alt"></i>
                    <h4>بنية دعم متكاملة</h4>
                    <p>سيارات دعم كل 20 كم · محطات تموين كل 15 كم · فرق طبية · تغطية إعلامية · تصوير جوي.</p>
                </div>
            </div>

            <div class="world-record">
                <div class="wr-icon">🌍</div>
                <div class="wr-text">
                    <h4>هدف قياسي عالمي — أطول مسير سياحي بيئي بالدراجات في العالم</h4>
                    <p>
                        نخطط لدخول موسوعة غينيس للأرقام القياسية كأطول وأكثر مسير سياحي بدراجات هوائية يحافظ على الاستدامة البيئية في التاريخ.
                        سورية تعود إلى خريطة العالم من أجمل بواباتها.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- SUSTAINABILITY -->
    <section id="sustain" class="sustain-section" aria-labelledby="sus-h">
        <div class="section-header reveal">
            <div class="section-tag">الاستدامة البيئية</div>
            <h2 id="sus-h">نتنقل. لا نُلوِّث. نُحسِّن.</h2>
            <p>كل دوسة دواسة هي خطوة نحو سورية أنظف وأجمل وأكثر ازدهاراً</p>
        </div>
        <div class="sustain-grid reveal">
            <div class="sustain-card">
                <i class="fas fa-leaf"></i>
                <h4>صفر انبعاثات</h4>
                <p>الدراجة الهوائية هي النقل الوحيد. لا غاز، لا ضجيج، لا تلوث.</p>
            </div>
            <div class="sustain-card">
                <i class="fas fa-trash-restore"></i>
                <h4>مناطق خالية من النفايات</h4>
                <p>كل مسار يُنظَّف بعد كل رحلة. مشاركون متطوعون في حملات التنظيف.</p>
            </div>
            <div class="sustain-card">
                <i class="fas fa-solar-panel"></i>
                <h4>طاقة نظيفة</h4>
                <p>إقامات تعمل بالطاقة الشمسية. شحن الإلكترونيات من محطات شمسية.</p>
            </div>
            <div class="sustain-card">
                <i class="fas fa-seedling"></i>
                <h4>زراعة أشجار</h4>
                <p>بذرة شجرة باسم كل مشارك في كل رحلة. شهادة زراعة رقمية.</p>
            </div>
        </div>
    </section>

    <!-- REVENUE MODEL -->
    <section id="revenue" aria-labelledby="rev-h">
        <div class="revenue-section reveal">
            <div class="section-header" style="margin-bottom:1rem">
                <div class="section-tag">نموذج الربح</div>
                <h2 id="rev-h" style="font-size:clamp(1.5rem,3.5vw,2.2rem)">مشروع مربح · بيئي · ومستدام</h2>
                <p style="font-size:.95rem">الاستدامة البيئية والربح المادي ليسا متعارضَين — هما شريكان في نجاح أُفق</p>
            </div>
            <div class="revenue-grid">
                <div class="revenue-item">
                    <div class="rev-icon"><i class="fas fa-ticket"></i></div>
                    <div class="rev-text">
                        <h4>رسوم المشاركة في الرحلات</h4>
                        <p>3500 ل.س للفرد · باقات مجموعات بخصومات · باقات VIP بخدمات إضافية.</p>
                    </div>
                </div>
                <div class="revenue-item">
                    <div class="rev-icon"><i class="fas fa-star"></i></div>
                    <div class="rev-text">
                        <h4>رسوم المهرجانات والفعاليات</h4>
                        <p>تذاكر مهرجانات دخل منفصل · رعاية الشركات · حقوق التسمية.</p>
                    </div>
                </div>
                <div class="revenue-item">
                    <div class="rev-icon"><i class="fas fa-handshake"></i></div>
                    <div class="rev-text">
                        <h4>رعايات الشركات والعلامات التجارية</h4>
                        <p>شراكات مع علامات رياضية وبيئية ومحلية. تسمية المسارات والمحطات.</p>
                    </div>
                </div>
                <div class="revenue-item">
                    <div class="rev-icon"><i class="fas fa-store"></i></div>
                    <div class="rev-text">
                        <h4>السوق الحرفي والتجارة المحلية</h4>
                        <p>عمولة على كل مبيعة في الأسواق الحرفية ضمن المهرجانات. دعم المنتج المحلي.</p>
                    </div>
                </div>
                <div class="revenue-item">
                    <div class="rev-icon"><i class="fas fa-camera"></i></div>
                    <div class="rev-text">
                        <h4>التوثيق الإعلامي</h4>
                        <p>بيع حقوق البث والتوثيق الإعلامي. منصات التواصل الاجتماعي كأداة تسويق مجانية.</p>
                    </div>
                </div>
                <div class="revenue-item">
                    <div class="rev-icon"><i class="fas fa-globe"></i></div>
                    <div class="rev-text">
                        <h4>السياحة الدولية</h4>
                        <p>استقطاب دراجين من دول عربية وأوروبية. حزم سياحية كاملة مع الإقامة والنقل.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- COMMUNITY -->
    <section id="community" style="margin-top:4rem" aria-labelledby="com-h">
        <div class="section-header reveal">
            <div class="section-tag">المجتمع</div>
            <h2 id="com-h">مجتمع أُفق — أكثر من رحلة</h2>
            <p>نبني حركة، نصنع أثراً، ونرسم خريطة جديدة لسورية</p>
        </div>
        <div class="community-grid">
            <div class="community-card reveal">
                <h3><i class="fas fa-trophy" style="color:var(--gold)"></i> بطولة أُفق الوطنية</h3>
                <p>سلسلة سباقات دراجات هوائية في مختلف المحافظات السورية. تصنيف وطني، جوائز قيمة، بطاقات دعم للمحترفين.</p>
                <ul class="specs-list">
                    <li><b>فئات عمرية:</b> من 16 سنة حتى 60+ بدون حد أقصى</li>
                    <li><b>جوائز:</b> مادية وعينية ورعايات لأفضل المتسابقين</li>
                    <li><b>الخريطة:</b> كل شهرين سباق في محافظة مختلفة</li>
                </ul>
            </div>
            <div class="community-card reveal" style="animation-delay:.12s">
                <h3><i class="fas fa-medal" style="color:var(--gold)"></i> أكاديمية أُفق للدراجات</h3>
                <p>تدريب وتأهيل المواهب لتمثيل سورية في المحافل الدولية. معسكرات تحت إشراف مدربين معتمدين دولياً.</p>
                <ul class="specs-list">
                    <li><b>التدريب:</b> تقنية وتكتيك وتغذية رياضية</li>
                    <li><b>الدعم:</b> معدات وتجهيزات لأفضل الدراجين</li>
                    <li><b>الهدف:</b> سورية في السباقات الدولية بحلول 2028</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- APP SECTION -->
    <section id="app-map" aria-labelledby="app-h">
        <div class="app-section reveal">
            <div class="app-content">
                <h3 id="app-h"><i class="fas fa-mobile-alt" style="margin-left:.5rem"></i> تطبيق أُفق الذكي</h3>
                <p>تجربة رقمية متكاملة تحوّل كل رحلة إلى مغامرة موثّقة وتفاعلية على أعلى المستويات.</p>
                <ul class="app-features">
                    <li><i class="fas fa-map-marked-alt"></i> خريطة تفاعلية لكل مسارات سورية</li>
                    <li><i class="fas fa-location-dot"></i> تتبع GPS حي لضمان أمان المشاركين</li>
                    <li><i class="fas fa-bell"></i> إشعارات عند المرور بالمعالم التاريخية</li>
                    <li><i class="fas fa-chart-line"></i> قياس السرعة والارتفاع والسعرات</li>
                    <li><i class="fas fa-ticket"></i> حجز الفعاليات والمهرجانات</li>
                    <li><i class="fas fa-award"></i> نظام نقاط ومكافآت لكل مسار</li>
                </ul>
            </div>
            <div class="app-mockup-box">
                <i class="fas fa-mobile-alt phone-icon"></i>
                <h3 style="color:var(--gold);font-family:'Amiri',serif;font-size:1.6rem;margin-bottom:.5rem">قريباً على</h3>
                <p style="opacity:.8">App Store & Google Play</p>
                <div style="margin-top:1.5rem;display:flex;flex-direction:column;gap:.7rem">
                    <div style="background:rgba(200,164,90,.12);border:1px solid rgba(200,164,90,.25);border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;font-size:.9rem">
                        <i class="fab fa-apple" style="color:var(--gold);font-size:1.2rem"></i> App Store
                    </div>
                    <div style="background:rgba(200,164,90,.12);border:1px solid rgba(200,164,90,.25);border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;font-size:.9rem">
                        <i class="fab fa-google-play" style="color:var(--gold);font-size:1.2rem"></i> Google Play
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BOOKING -->
    <section id="booking" class="booking-section" aria-labelledby="book-h">
        <div class="booking-container">
            <div class="booking-header">
                <h2 id="book-h"><i class="fas fa-bicycle"></i> احجز رحلتك الآن</h2>
                <p>انضم إلى تجربة سياحية فريدة من نوعها في سورية</p>
            </div>
            <div class="booking-body">
                <form id="bookingForm" novalidate>

                    <div class="form-section">
                        <div class="form-section-title"><i class="fas fa-user-circle"></i> معلوماتك الشخصية</div>
                        <div class="form-group">
                            <label for="fullName">الاسم الكامل <span>*</span></label>
                            <div class="input-wrapper">
                                <i class="fas fa-user input-icon"></i>
                                <input type="text" id="fullName" name="fullName" placeholder="أدخل اسمك الكامل" required minlength="3" autocomplete="name">
                            </div>
                            <div class="field-error" id="fullName-error">الرجاء إدخال الاسم الكامل (3 أحرف على الأقل)</div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="email">البريد الإلكتروني <span>*</span></label>
                                <div class="input-wrapper">
                                    <i class="fas fa-envelope input-icon"></i>
                                    <input type="email" id="email" name="email" placeholder="your@email.com" required autocomplete="email">
                                </div>
                                <div class="field-error" id="email-error">يرجى إدخال بريد إلكتروني صحيح</div>
                            </div>
                            <div class="form-group">
                                <label for="phone">رقم الهاتف <span>*</span></label>
                                <div class="input-wrapper">
                                    <i class="fas fa-phone input-icon"></i>
                                    <input type="tel" id="phone" name="phone" placeholder="+963-9xxxxxxxx" required pattern="[\+]?[0-9\s\-]{7,15}" autocomplete="tel">
                                </div>
                                <div class="field-error" id="phone-error">يرجى إدخال رقم هاتف صحيح</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="province">المحافظة <span>*</span></label>
                            <div class="input-wrapper">
                                <i class="fas fa-map-marker-alt input-icon"></i>
                                <select id="province" name="province" required>
                                    <option value="">اختر المحافظة</option>
                                    <option>دمشق</option><option>ريف دمشق</option>
                                    <option>حمص</option><option>حماة</option>
                                    <option>اللاذقية</option><option>طرطوس</option>
                                    <option>حلب</option><option>درعا</option>
                                    <option>السويداء</option><option>دير الزور</option>
                                    <option>الحسكة</option><option>الرقة</option>
                                    <option>إدلب</option><option>القنيطرة</option>
                                </select>
                            </div>
                            <div class="field-error" id="province-error">يرجى اختيار المحافظة</div>
                        </div>
                    </div>

                    <div class="form-section">
                        <div class="form-section-title"><i class="fas fa-route"></i> تفاصيل الرحلة</div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="date">تاريخ الرحلة <span>*</span></label>
                                <div class="input-wrapper">
                                    <i class="fas fa-calendar-days input-icon"></i>
                                    <select id="date" name="date" required onchange="updatePrice()">
                                        <option value="">اختر تاريخاً</option>
                                        <option value="2026-07-15">15 يوليو 2026</option>
                                        <option value="2026-08-01">01 أغسطس 2026</option>
                                        <option value="2026-08-20">20 أغسطس 2026</option>
                                        <option value="2026-09-05">05 سبتمبر 2026</option>
                                        <option value="2026-09-25">25 سبتمبر 2026</option>
                                        <option value="2026-10-10">10 أكتوبر 2026</option>
                                    </select>
                                </div>
                                <div class="field-error" id="date-error">يرجى اختيار تاريخ</div>
                            </div>
                            <div class="form-group">
                                <label for="participants">عدد المشاركين <span>*</span></label>
                                <div class="input-wrapper">
                                    <i class="fas fa-users input-icon"></i>
                                    <input type="number" id="participants" name="participants" min="1" max="20" value="1" required onchange="updatePrice()" oninput="updatePrice()">
                                </div>
                                <div class="field-error" id="participants-error">العدد بين 1 و 20 شخصاً</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="notes">ملاحظات إضافية</label>
                            <textarea id="notes" name="notes" placeholder="أي متطلبات خاصة، حجم الدراجة، أو معلومات تودّ مشاركتها؟" maxlength="600"></textarea>
                        </div>
                    </div>
                 <div class="price-summary">
                        <div class="price-row">
                            <span><i class="fas fa-user-check"></i> السعر لكل شخص:</span>
                            <strong id="pricePerPerson">3,500 ل.س</strong>
                        </div>
                        <div class="price-row">
                            <span><i class="fas fa-people-group"></i> عدد المشاركين:</span>
                            <strong id="participantsDisplay">1</strong>
                        </div>
                        <div class="price-row">
                            <span><i class="fas fa-calculator"></i> الإجمالي:</span>
                            <strong id="totalPrice">3,500 ل.س</strong>
                        </div>
                    </div>

                    <div class="terms-box">
                        <input type="checkbox" id="terms" name="terms" required>
                        <label for="terms">
                            أوافق على <a href="#" onclick="showTermsModal(event)">الشروط والأحكام</a> وسياسة الخصوصية الخاصة بمشروع أُفق
                        </label>
                    </div>

                    <button type="submit" class="submit-btn">
                        <i class="fas fa-bicycle"></i> أؤكد حجزي في رحلة أُفق
                    </button>
                </form>
            </div>
        </div>
    </section>

</main>

<!-- FOOTER -->
<footer>
    <div class="footer-logo"><i class="fas fa-bicycle"></i> أُفق | HORIZON</div>
    <p>إعداد الطالب: <b>يزن ملحم</b> | إشراف الدكتور: <b>مرهف الحمود</b></p>
    <p style="opacity:.6">مادة تسويق وترويج سياحي — كلية السياحة — جامعة حمص 2026</p>
    <div class="footer-contact">
        <i class="fas fa-phone-volume"></i>
        <a href="tel:+963993491044" style="color:var(--gold);text-decoration:none"> +963 993 491 044</a>
    </div>
    <p style="font-style:italic;color:rgba(200,164,90,.7);font-size:.95rem;margin-top:.75rem">
        "اركب. اكتشف. أبقِ الأثر جميلاً."
    </p>
    <nav class="footer-social">
        <a href="#" class="social-btn" aria-label="فيسبوك"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social-btn" aria-label="انستغرام"><i class="fab fa-instagram"></i></a>
        <a href="#" class="social-btn" aria-label="تويتر"><i class="fab fa-x-twitter"></i></a>
        <a href="#" class="social-btn" aria-label="واتساب"><i class="fab fa-whatsapp"></i></a>
        <a href="#" class="social-btn" aria-label="يوتيوب"><i class="fab fa-youtube"></i></a>
        <a href="#" class="social-btn" aria-label="تيك توك"><i class="fab fa-tiktok"></i></a>
    </nav>
</footer>

<!-- TOAST -->
<div id="toast">
    <i class="fas fa-check-circle"></i>
    <span id="toastMsg">تم تنفيذ العملية بنجاح</span>
</div>

<!-- SCROLL TO TOP -->
<button id="scrollTop" aria-label="العودة للأعلى">
    <i class="fas fa-chevron-up"></i>
</button>

<script>
'use strict';

/* NAV TOGGLE */
const menuIcon = document.getElementById('menuIcon');
const navMenu  = document.getElementById('navMenu');
menuIcon.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    menuIcon.setAttribute('aria-expanded', open);
    menuIcon.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars';
});
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuIcon.setAttribute('aria-expanded','false');
    menuIcon.querySelector('i').className = 'fas fa-bars';
}));

/* ACTIVE NAV */
const sections = document.querySelectorAll('section[id],header[id]');
const navLinks  = document.querySelectorAll('.nav-link');
new IntersectionObserver(entries => {
    entries.forEach(e => {
        if(e.isIntersecting){
            navLinks.forEach(l => l.classList.remove('active'));
            const a = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
            if(a) a.classList.add('active');
        }
    });
},{threshold:0.3}).observe || sections.forEach(s =>
    new IntersectionObserver(entries => {
        entries.forEach(e => {
            if(e.isIntersecting){
                navLinks.forEach(l=>l.classList.remove('active'));
                const a=document.querySelector(`.nav-link[href="#${e.target.id}"]`);
                if(a)a.classList.add('active');
            }
        });
    },{threshold:0.3}).observe(s)
);
// Simple version:
const sectionObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            navLinks.forEach(l=>l.classList.remove('active'));
            const a=document.querySelector(`.nav-link[href="#${e.target.id}"]`);
            if(a)a.classList.add('active');
        }
    });
},{threshold:0.3});
sections.forEach(s=>sectionObs.observe(s));

/* SCROLL TO TOP */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll',()=>{
    scrollTopBtn.classList.toggle('visible', window.scrollY>400);
},{passive:true});
scrollTopBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* REVEAL */
const revObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add('visible');
            revObs.unobserve(e.target);
        }
    });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));

/* PRICE CALCULATOR */
function updatePrice(){
    const raw = parseInt(document.getElementById('participants').value,10);
    const n = isNaN(raw)||raw<1?1:raw>20?20:raw;
    const pricePerPerson = 3500;
    const total = pricePerPerson * n;
    document.getElementById('participantsDisplay').textContent = n;
    document.getElementById('pricePerPerson').textContent = pricePerPerson.toLocaleString('ar-SA') + ' ل.س';
    document.getElementById('totalPrice').textContent = total.toLocaleString('ar-SA') + ' ل.س';
}

/* TOAST */
function showToast(msg, dur=3500){
    const t = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(()=>t.classList.remove('show'), dur);
}

/* VALIDATION */
function validateField(input){
    const errEl = document.getElementById(input.id+'-error');
    if(!errEl) return true;
    let valid=true;
    if(input.type==='email') valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    else if(input.type==='tel') valid=/^[\+]?[0-9\s\-]{7,15}$/.test(input.value.trim());
    else if(input.type==='number'){const v=parseInt(input.value,10);valid=!isNaN(v)&&v>=1&&v<=20;}
    else if(input.tagName==='SELECT') valid=input.value!=='';
    else valid=input.value.trim().length>=(parseInt(input.getAttribute('minlength'))||1);
    errEl.classList.toggle('visible',!valid);
    input.setAttribute('aria-invalid',!valid);
    return valid;
}
document.querySelectorAll('#bookingForm input,#bookingForm select,#bookingForm textarea').forEach(f=>{
    f.addEventListener('blur',()=>validateField(f));
    f.addEventListener('input',()=>{
        const e=document.getElementById(f.id+'-error');
        if(e) e.classList.remove('visible');
    });
});

/* SUBMIT */
document.getElementById('bookingForm').addEventListener('submit',function(e){
    e.preventDefault();
    const fields=this.querySelectorAll('input[required],select[required]');
    let ok=true;
    fields.forEach(f=>{if(!validateField(f)) ok=false;});
    if(!ok){showToast('⚠️ يرجى تصحيح الأخطاء في النموذج');return;}
    if(!document.getElementById('terms').checked){showToast('⚠️ يرجى قبول الشروط والأحكام أولاً');return;}
    const booking={
        id:'BK-'+Date.now(),
        fullName: document.getElementById('fullName').value.trim(),
        email:    document.getElementById('email').value.trim(),
        phone:    document.getElementById('phone').value.trim(),
        province: document.getElementById('province').value,
        date:     document.getElementById('date').value,
        participants: document.getElementById('participants').value,
        total:    document.getElementById('totalPrice').textContent,
        at:       new Date().toISOString()
    };
    try{
        const b=JSON.parse(localStorage.getItem('afq_bookings')||'[]');
        b.push(booking);
        localStorage.setItem('afq_bookings',JSON.stringify(b));
    }catch(err){}
    showToast('✅ تم استقبال حجزك! سنتواصل معك على '+booking.email, 5500);
    this.reset();
    updatePrice();
    window.scrollTo({top:0,behavior:'smooth'});
});

/* TERMS */
function showTermsModal(e){
    e.preventDefault();
    alert(
        'الشروط والأحكام — مشروع أُفق\n\n'+
        '• الحجز مؤكد عند استلام المبلغ كاملاً.\n'+
        '• الإلغاء قبل 7 أيام: استرداد 70%.\n'+
        '• كل مشارك مسؤول عن لياقته البدنية.\n'+
        '• الحد الأدنى للعمر: 16 سنة.\n'+
        '• تأمين شامل مدرج في سعر الباقة.\n'+
        '• نحن لا نتحمل مسؤولية الأغراض الشخصية.\n\n'+
        'للاستفسار: +963 993 491 044'
    );
}

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
        const h=this.getAttribute('href');
        if(h==='#') return;
        const t=document.querySelector(h);
        if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
    });
});

/* INIT */
document.addEventListener('DOMContentLoaded', updatePrice);
</script>
</body>
</html>
