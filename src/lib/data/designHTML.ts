export const textCardHtml = `
  <div
    style={{
      boxSizing: 'border-box',
      width: 595,
      minHeight: 845,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(215, 215, 215)',
      position: 'relative',
    }}
  >
    <img
      src='/public/card/decoration/text-card-top.png'
      alt='top'
      width={595}
      style={{
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '130px 20px 180px',
        paddingTop: '130px',
        paddingBottom: '180px'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          fontWeight: '700',
          backgroundColor: 'rgb(255, 255, 255, 0.8)',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        {mentorName}
      </div>
    </div>
    <img
      src='/public/card/decoration/text-card-bottom.png'
      alt='bottom'
      width={595}
      style={{
        width: '100%',
        height: 'auto',
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}
    />
  </div>
`;
