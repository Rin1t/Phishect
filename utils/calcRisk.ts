interface VirustotalStatsForDomain { 
    harmless: number,
    malacious: number,
    suspicious: number, 
    undetected: number,
    timeout: number
}

export function calcRisk(virusTotalStatsFordomain: VirustotalStatsForDomain){
    const { malacious, suspicious} = VirusTotalStatsForDomain;

    if(malacious > 0) { 
        return "High Risk"
    }
    if(suspicious > 0) { 
        return "Low Risk"
    }
    return "Low Risk"
}