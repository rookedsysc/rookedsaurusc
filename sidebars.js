module.exports = {
  flutter: [
    'flutter/what-is-flutter',
    {
      type: 'category',
      label: 'Dart',
      collapsed: false, // 접힌 상태로 시작
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated', dirName: 'flutter/grammar',
        }
      ]
    },
    {
      type: 'category',
      label: 'Theory',
      collapsed: false, // 접힌 상태로 시작
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated', dirName: 'flutter/theory',
        }
      ]
    },
    {
      type: 'category',
      label: 'Widget',
      collapsed: true, // 접힌 상태로 시작
      link: {
        type: 'generated-index',
      },
      items: [
        'flutter/widget/tab-bar-view',
        {
          type: 'category',
          label: 'Scrollalbe Widget',
          link: {
            type: 'doc',
            id: 'flutter/widget/scrollable-widget'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'flutter/widget/scrollable-widget'
            }
          ]
        }
        // {
        //   type: 'category',
        //   label: 'Scrollable Widget',
        //   collapsed: true, // 접힌 상태로 시작
        //   link: {
        //     type: 'generated-index',
        //   },
        //   items: [
        //     {
        //       type: 'autogenerated', 
        //       dirName: 'flutter/widget/scrollable-widget',
        //     }
        //   ]
        // }
      ]
    },
    {
      type: 'category',
      label: 'Packeages',
      collapsed: true, // 접힌 상태로 시작
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated', dirName: 'flutter/packages',
        },
      ]
    }
  ],

  // tutorial sidebar
  tutorial: [
    'intro',
    {
      type: 'category',
      label: 'Tutorial-Basics',
      collapsed: false,
      link: { // category 클릭하면 해당하는 category의 모든 문서를 보여줌
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial/tutorial-basics',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorial-Extras',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial/tutorial-extras',
        },

      ],
    }
  ],
};
